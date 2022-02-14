import { Controller } from "stimulus"
import initMessageChannel from "../channels/message_channel"

export default class extends Controller {
  static targets = ["messages", "input"]

  initialize() {
		this.channel = initMessageChannel()
    this.channel.received = (data) => {
      const { message } = data
      this.messagesTarget.value = this.messagesTarget.value + "\n" + message
    }
  }

  onSend(ev) {
    if (ev.which === 13 && ev.target.value.length > 0) {
      if (this.channel) {
        this.channel.send({ message: ev.target.value })
        this.inputTarget.value = ""
      }
    }
  }
}
