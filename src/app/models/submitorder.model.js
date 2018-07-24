import moment from 'moment';

export default class Model {
  constructor() {
    this.now = moment().day(15);
  };
  setDate(month, year) {
    this.now.month(month).year(year);
  };
  getDays() {
    const days = [];
    const calendarStart = moment(this.now).startOf('month');
    const calendarEnd = moment(this.now).endOf('month');
    const timeRange = calendarEnd.valueOf() - calendarStart.valueOf();
    const daysInView = Math.floor(moment.duration( timeRange ).asDays());

    for (let i = 0; i <= daysInView; i++) {
      days.push({
        iso: moment(calendarStart).add(i, 'days').toISOString()
      });
    };

    return days;
  };
  toJSON() {
    const iso = this.now.toISOString();
    const days = this.getDays();

    return { iso, days };
  };

  getDataTableData(){
    const ordersData = [{
      'borrower': 'Sydney Crosby',
      'email': 'sydney.crosby@email.com',
      'status': 'completed',
      'orderdate': '01/01/2018',
      'action' : '',
      'receiveddocument' : ''
      
  },
  {
      'borrower': 'Vincent Keller',
      'email': 'vincent.keller@email.com',
      'status': 'completed',
      'orderdate': '01/01/2018',
      'action' : '',
      'receiveddocument' : ''
  },
  {
      'borrower': 'Ann Jones',
      'email': 'ann.jones@email.com',
      'status': 'completed',
      'orderdate': '01/01/2018',
      'action' : '',
      'receiveddocument' : ''
  },
  {
      'borrower': 'Jack Young',
      'email': 'jack.young@email.com',
      'status': 'completed',
      'orderdate': '01/01/2018',
      'action' : '',
      'receiveddocument' : ''
  },
  {
      'borrower': 'Kevin Simmons',
      'email': 'kevin.simmons@email.com',
      'status': 'completed',
      'orderdate': '01/01/2018',
      'action' : '',
      'receiveddocument' : ''
  }
  ]
  }
}