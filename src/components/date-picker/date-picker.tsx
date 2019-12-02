import { Component, h, Listen, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "tm-date-picker",
  styleUrl: "date-picker.scss",
  shadow: true
})
export class DatePicker {
  private picker: HTMLElement;
  private input: HTMLInputElement;

  @Event()
  monthDayClicked: EventEmitter;

  @Prop() format: string = "MM/DD/YYYY";

  showCalendar() {
    this.picker.style.visibility = "visible";
  }

  @Listen("dayClicked")
  dayClickedHandler(day: any) {
    console.log(day.detail.event);

    this.picker.style.visibility = "hidden";
    this.input.value = day.detail.event.date.format(this.format);

    this.monthDayClicked.emit(day.detail);
  }

  render() {
    return (
      <div>
        <input
          ref={el => {
            this.input = el;
          }}
          type="button"
          onClick={() => this.showCalendar()}
        ></input>
        <div
          ref={el => {
            this.picker = el;
          }}
          class="calendar"
        >
          <gx-calendar-month-view></gx-calendar-month-view>
        </div>
      </div>
    );
  }
}
