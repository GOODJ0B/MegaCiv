package nl.megacerver.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class SocketController {

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public Object sendMessage(@Payload Object game) {
        return game;
    }
}
