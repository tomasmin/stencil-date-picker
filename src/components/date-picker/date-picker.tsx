import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "tm-date-picker",
  styleUrl: "date-picker.css",
  shadow: true
})
export class DatePicker {
  render() {
    return <input type="date"></input>;
  }
}
