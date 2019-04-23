<template>
    <table>
        <thead class="fc-head">
            <tr>
                <td class="fc-head-container fc-widget-header">
                    <div class="fc-row fc-widget-header">
                        <table>
                            <thead>
                            <tr>
                                <th class="fc-day-header fc-widget-header"><span>Mon</span></th>
                                <th class="fc-day-header fc-widget-header"><span>Tue</span></th>
                                <th class="fc-day-header fc-widget-header"><span>Wed</span></th>
                                <th class="fc-day-header fc-widget-header"><span>Thu</span></th>
                                <th class="fc-day-header fc-widget-header"><span>Fri</span></th>
                                <th class="fc-day-header fc-widget-header"><span>Sat</span></th>
                                <th class="fc-day-header fc-widget-header"><span>Sun</span></th>
                            </tr>
                            <tr v-for="(row, indexRow) in (monthArray.length / week)" :key="indexRow">
                                <td v-for="(column, indexCol) in week"
                                    :key="indexCol"
                                    :class="{ 'is-holiday': getDayByColRow(indexRow, indexCol).isHoliday }"
                                    >
                                    <div class="fc-day-number"
                                         v-bind:class="{ 'current-month': getDayByColRow(indexRow, indexCol).isThisMonth }">
                                        {{getDayByColRow(indexRow, indexCol).dayOfMonth}}</div>
                                </td>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </td>
            </tr>
        </thead>
        <tbody class="fc-body">

        </tbody>
    </table>
</template>

<script>
    export default {
        name: "month",
        data: function() {
            return {
                week: 7,
                monthArray: []
            }
        },
        created: function () {
            this.createCalendar(2019, 1);
        },
        methods: {
            getDayByColRow: function(row, column) {
                return this.monthArray[row * 7 + column]
            },
            createCalendar: function(year, month) {
                const monthArray = [];
                const mon = month - 1;
                const d = new Date(year, mon);
                const DAY_IN_MSEC = 24 * 60 * 60 * 1000;

                for (var i = 1; i <= getDay(d); i++) {
                    let beforeDays = new Date(d);
                        beforeDays.setTime(beforeDays.getTime() - (DAY_IN_MSEC * i));
                    monthArray.unshift(new daysConstruct(beforeDays, false));
                }

                while (d.getMonth() == mon) {
                    monthArray.push(new daysConstruct(d, true));
                    d.setDate(d.getDate() + 1);
                }

                if (getDay(d) != 0) {
                    for (i = this.week; i > getDay(d); i--) {

                        let afterDays = new Date(d);
                            afterDays.setTime(afterDays.getTime() + (DAY_IN_MSEC * (this.week-i) ));
                        monthArray.push(new daysConstruct(afterDays, false));
                    }
                }

                this.monthArray = monthArray;

                function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
                    var day = date.getDay();
                    if (day == 0) day = this.week;
                    return day - 1;
                }

                function daysConstruct(date, isThisMonth) {
                    this.date = date;
                    this.dayOfMonth = date.getDate();
                    this.isThisMonth = isThisMonth;
                    this.isHoliday = (date.getDay() === 0 || date.getDay() === 6) ? true : false
                }
            }
        }
    }
</script>

<style scoped>
    td {
        height: 120px;
    }
    .fc th {
        background: #0073aa;
        color: #fff;
        border-color: #0073aa;
    }
    .fc-day-number {
        float: right;
        padding: 2px;
        cursor: pointer;
        opacity: 0.3;
    }
    .current-month {
        opacity: 1;
    }
    .is-holiday {
        background: #F3F2F2;
    }
    .is-holiday .fc-day-number {
        opacity: 0.3;
    }
    .fc-day {
        border: 1px solid #DDDDDD;
    }
</style>