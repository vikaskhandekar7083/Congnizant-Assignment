package com.library;

import com.library.service.BookService;
import org.springframework.beans.BeansException;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Application {
    public static void main(String[] args) {
        try (var ctx = new ClassPathXmlApplicationContext("spring/applicationContext.xml")) {
            BookService bookService = ctx.getBean("bookService", BookService.class);
            bookService.addBook("Effective Java");
            bookService.addBook("Spring in Action");
            System.out.println(bookService.listBooks());
        }
        catch (BeansException e) {
            System.err.println("Spring failed to start:");
            e.printStackTrace();
        }
    }
}
