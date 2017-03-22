package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;

@Controller
public class UserController {
    @PostMapping("/User")
    public String User(@RequestParam String username,@RequestParam String password, HttpSession session) {
        if (username.equalsIgnoreCase("admin") && password.equalsIgnoreCase("123") ) {
            session.setAttribute("user", username);
            return "index";
        }



        return "redirect:/";

    }
}
