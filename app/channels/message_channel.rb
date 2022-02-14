class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "message_channel"
  end

  def receive(data)
    ActionCable.server.broadcast "message_channel", data
  end
end
