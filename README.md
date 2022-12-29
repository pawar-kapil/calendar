# calendar

A simple, lightweight inline calendar implemented in vanilla JavaScript that allows you to filter dates, set available dates/weekdays, enable/disable past dates, and more.

## Installation:

To use the calendar in your project, simply include the JavaScript and CSS files in your HTML file:
```
<link rel="stylesheet" href="path/to/calendar.css">
<script src="path/to/calendar.js"></script>
```

## Usage:

To use the calendar, add the following HTML code to your page:
```
<div class="calendar"></div>
```

Then, in your JavaScript code, select the calendar element and initialize the calendar:
```
const calendarEl = document.querySelector('.calendar');
initCalendar(calendarEl);
```

## Options:

You can customize the calendar by passing an options object as the second argument to the initCalendar function. The available options are:

availableDates: An array of Date objects representing the available dates that can be selected.

availableWeekdays: An array of integers representing the available weekdays (0 = Sunday, 1 = Monday, etc.) that can be selected.

disablePastDates: A boolean value indicating whether past dates can be selected or not.

onDateSelect: A callback function that will be called whenever a date is selected. The selected date will be passed as an argument to the callback function.


## Points To Note:

For now, available weekdays are - Monday, Tuesday, Wednesday, Friday.

For now, available dates are every second alternate day for next 30 days.

## Future Work:

we can make both of these configurable.
