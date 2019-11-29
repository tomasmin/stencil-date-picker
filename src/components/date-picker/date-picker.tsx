import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "tm-date-picker",
  styleUrl: "date-picker.scss",
  shadow: true
})
export class DatePicker {
  private picker: HTMLElement;
  private input: HTMLInputElement;

  showCalendar() {
    this.picker.style.visibility = "visible";
  }
  hideCalendar(day: string) {
    this.picker.style.visibility = "hidden";
    this.input.value = "mm/" + day + "/yyyy";
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
          <div class="calendar__date">
            <div class="calendar__day">M</div>
            <div class="calendar__day">T</div>
            <div class="calendar__day">W</div>
            <div class="calendar__day">T</div>
            <div class="calendar__day">F</div>
            <div class="calendar__day">S</div>
            <div class="calendar__day">S</div>
            <div class="calendar__number"></div>
            <div class="calendar__number"></div>
            <div class="calendar__number"></div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("1")}
            >
              1
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("2")}
            >
              2
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("3")}
            >
              3
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("4")}
            >
              4
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("5")}
            >
              5
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("6")}
            >
              6
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("7")}
            >
              7
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("8")}
            >
              8
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("9")}
            >
              9
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("10")}
            >
              10
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("11")}
            >
              11
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("12")}
            >
              12
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("13")}
            >
              13
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("14")}
            >
              14
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("15")}
            >
              15
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("16")}
            >
              16
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("17")}
            >
              17
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("18")}
            >
              18
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("19")}
            >
              19
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("20")}
            >
              20
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("21")}
            >
              21
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("22")}
            >
              22
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("23")}
            >
              23
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("24")}
            >
              24
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("25")}
            >
              25
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("26")}
            >
              26
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("27")}
            >
              27
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("28")}
            >
              28
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("29")}
            >
              29
            </div>
            <div
              class="calendar__number"
              onClick={() => this.hideCalendar("30")}
            >
              30
            </div>
          </div>
        </div>
      </div>
    );
  }
}
