package com.cloudsales.adminfront.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
public class AdminfrontController {

    @RequestMapping("/admin")
    public String adminApplication(HttpSession session) {
        return "admin-application";
    }

    @RequestMapping("/login")
    public String loginPage() {
        return "login-page";
    }
}
