
// 🌟 Sistema de Calendário Tutoria Interativo
// ============================
!function() {
    moment.locale('pt-br');

    function Calendar(selector, events) {
        this.el = document.querySelector(selector);
        this.events = events || [];
        this.current = moment().date(1);

        // Carregar eventos salvos pelo usuário
        const saved = localStorage.getItem('tutoriaEventos');
        if (saved) {
            const parsed = JSON.parse(saved);
            parsed.forEach(e => e.date = moment(e.date));
            this.events.push(...parsed);
        }

        this.draw();
    }

    Calendar.prototype.draw = function() {
        this.el.innerHTML = '';
        this.drawHeader();
        this.drawMonth();
        this.drawLegend();
    }

    Calendar.prototype.drawHeader = function() {
        var self = this;
        const header = createElement('div', 'header');
        const title = createElement('h1', '', this.current.format('MMMM YYYY'));

        const right = createElement('div', 'right', '›');
        right.addEventListener('click', () => self.nextMonth());

        const left = createElement('div', 'left', '‹');
        left.addEventListener('click', () => self.prevMonth());

        header.appendChild(left);
        header.appendChild(title);
        header.appendChild(right);
        this.el.appendChild(header);
    }

    Calendar.prototype.drawMonth = function() {
        this.month = createElement('div', 'month');
        this.el.appendChild(this.month);
        this.backFill();
        this.currentMonth();
        this.fowardFill();
    }

    Calendar.prototype.backFill = function() {
        const clone = this.current.clone();
        const dayOfWeek = clone.day();
        if (!dayOfWeek) return;
        clone.subtract('days', dayOfWeek + 1);
        for (let i = dayOfWeek; i > 0; i--) this.drawDay(clone.add('days', 1));
    }

    Calendar.prototype.fowardFill = function() {
        const clone = this.current.clone().add('months', 1).subtract('days', 1);
        const dayOfWeek = clone.day();
        if (dayOfWeek === 6) return;
        for (let i = dayOfWeek; i < 6; i++) this.drawDay(clone.add('days', 1));
    }

    Calendar.prototype.currentMonth = function() {
        const clone = this.current.clone();
        const month = clone.month();
        while (clone.month() === month) {
            this.drawDay(clone);
            clone.add('days', 1);
        }
    }

    Calendar.prototype.getWeek = function(day) {
        if (!this.week || day.day() === 0) {
            this.week = createElement('div', 'week');
            this.month.appendChild(this.week);
        }
    }

    Calendar.prototype.drawDay = function(day) {
        this.getWeek(day);

        const outer = createElement('div', this.getDayClass(day));
        outer.addEventListener('click', () => this.openDay(outer));

        const name = createElement('div', 'day-name', day.format('ddd'));
        const number = createElement('div', 'day-number', day.format('DD'));
        const events = createElement('div', 'day-events');

        this.drawEvents(day, events);

        outer.appendChild(name);
        outer.appendChild(number);
        outer.appendChild(events);
        this.week.appendChild(outer);
    }

    Calendar.prototype.drawEvents = function(day, element) {
        const todaysEvents = this.events.filter(ev => moment(ev.date).isSame(day, 'day'));
        todaysEvents.forEach(ev => {
            const evSpan = createElement('span', ev.color || 'blue');
            element.appendChild(evSpan);
        });
    }

    Calendar.prototype.getDayClass = function(day) {
        const classes = ['day'];
        if (day.month() !== this.current.month()) classes.push('other');
        else if (moment().isSame(day, 'day')) classes.push('today');
        return classes.join(' ');
    }

    // ============================
    // Abrir detalhes do dia
    // ============================
    Calendar.prototype.openDay = function(el) {
        const dayNumber = +el.querySelector('.day-number').textContent;
        const day = this.current.clone().date(dayNumber);

        let details = document.querySelector('.details');
        if (!details) {
            details = createElement('div', 'details');
            this.el.appendChild(details);
        }

        details.innerHTML = `<h3>${day.format('DD [de] MMMM')}</h3>`;

        let todaysEvents = this.events.filter(ev => ev.date.isSame(day, 'day'));

        // Campo para adicionar nova atividade
        const inputWrapper = createElement('div', 'add-event');
        const input = createElement('input');
        input.placeholder = 'Digite uma nova atividade...';
        const btn = createElement('button', '', 'Adicionar');
        inputWrapper.appendChild(input);
        inputWrapper.appendChild(btn);
        details.appendChild(inputWrapper);

        // Botão para limpar todas atividades do dia (usuário)
        const clearBtn = createElement('button', 'clear-day', 'Limpar todas');
        details.appendChild(clearBtn);

        const eventsList = createElement('div', 'event-list');
        details.appendChild(eventsList);

        const renderEvents = () => {
            eventsList.innerHTML = '';
            todaysEvents = this.events.filter(ev => ev.date.isSame(day, 'day'));
            if (!todaysEvents.length) {
                eventsList.appendChild(createElement('p', '', 'Nenhuma atividade para este dia.'));
            } else {
                todaysEvents.forEach(ev => {
                    const div = createElement('div', 'event');
                    div.textContent = '📘 ' + ev.eventName;

                    // Só permite apagar se for evento do usuário
                    if (ev.calendar === 'Usuário') {
                        const delBtn = createElement('button', 'delete-event', '❌');
                        delBtn.addEventListener('click', () => {
                            this.events.splice(this.events.indexOf(ev), 1);
                            localStorage.setItem('tutoriaEventos', JSON.stringify(this.events));
                            renderEvents();
                            this.draw();
                        });
                        div.appendChild(delBtn);
                    }

                    eventsList.appendChild(div);
                });
            }
        };
        renderEvents();

        // Adicionar evento
        const addEvent = () => {
            const val = input.value.trim();
            if (!val) return;
            const novoEvento = {
                eventName: val,
                date: day.clone(),
                color: 'green',
                calendar: 'Usuário'
            };
            this.events.push(novoEvento);
            localStorage.setItem('tutoriaEventos', JSON.stringify(this.events));
            input.value = '';
            renderEvents();
            this.draw();
        };

        btn.addEventListener('click', addEvent);
        input.addEventListener('keypress', e => { if (e.key === 'Enter') addEvent(); });

        // Limpar todas atividades do dia adicionadas pelo usuário
        clearBtn.addEventListener('click', () => {
            this.events = this.events.filter(ev => !ev.date.isSame(day, 'day') || ev.calendar !== 'Usuário');
            localStorage.setItem('tutoriaEventos', JSON.stringify(this.events));
            renderEvents();
            this.draw();
        });
    }

    Calendar.prototype.drawLegend = function() {
        const legend = createElement('div', 'legend');
        const calendars = this.events
            .map(e => e.calendar + '|' + (e.color || 'blue'))
            .filter((v, i, a) => a.indexOf(v) === i);
        calendars.forEach(e => {
            const [name, color] = e.split('|');
            const entry = createElement('span', 'entry ' + color, name);
            legend.appendChild(entry);
        });
        this.el.appendChild(legend);
    }

    Calendar.prototype.nextMonth = function() {
        this.current.add('months', 1);
        this.draw();
    }

    Calendar.prototype.prevMonth = function() {
        this.current.subtract('months', 1);
        this.draw();
    }

    window.Calendar = Calendar;

    function createElement(tag, cls, text) {
        const el = document.createElement(tag);
        if (cls) el.className = cls;
        if (text) el.textContent = text;
        return el;
    }
}();

// ============================
// 🎯 Inicialização com eventos fixos
// ============================
!function() {
    const eventosFixos = [
        { eventName: 'Aula de Matemática', calendar: 'Aulas', color: 'orange' },
        { eventName: 'Simulado ENEM', calendar: 'Simulados', color: 'blue' },
        { eventName: 'Tutoria Online', calendar: 'Tutores', color: 'green' },
        { eventName: 'Entrega de Trabalho', calendar: 'Tarefas', color: 'yellow' },
        { eventName: 'Reunião de Pais', calendar: 'Eventos', color: 'orange' },
        { eventName: 'Prova de História', calendar: 'Avaliações', color: 'blue' },
        { eventName: 'Workshop Redação', calendar: 'Oficinas', color: 'green' },
        { eventName: 'Feira de Ciências', calendar: 'Eventos', color: 'yellow' }
    ];

    const today = moment();
    const daysInMonth = today.daysInMonth();
    eventosFixos.forEach((ev, i) => ev.date = today.clone().date((i * 3) % daysInMonth + 1));

    document.addEventListener('DOMContentLoaded', () => {
        const calendarElement = document.getElementById('calendar');
        if (calendar      )   if (calendarElement) new Calendar('#calendar', eventosFixos);
    });
}();


