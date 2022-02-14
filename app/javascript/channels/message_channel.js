import consumer from "./consumer"

export default function () {
	return consumer.subscriptions.create(
		{
			channel: 'MessageChannel',
		},
		{
			connected() {
				console.log("Connected to message channel")
			},

			disconnected() {
				console.log("Disconnected from message channel")
			}
		}
	)
}
