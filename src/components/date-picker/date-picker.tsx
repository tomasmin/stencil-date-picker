import {
  Component,
  Element,
  h,
  Listen,
  Event,
  EventEmitter
} from "@stencil/core";

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

  showCalendar() {
    this.picker.style.visibility = "visible";
  }
  hideCalendar(day: string) {
    this.picker.style.visibility = "hidden";
    this.input.value = "mm/" + day + "/yyyy";
  }

  @Listen("dayClicked")
  dayClickedHandler(day: any) {
    console.log(day.detail.event.date._d);

    this.picker.style.visibility = "hidden";
    this.input.value = day.detail.event.date.format("MM/DD/YYYY");

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
