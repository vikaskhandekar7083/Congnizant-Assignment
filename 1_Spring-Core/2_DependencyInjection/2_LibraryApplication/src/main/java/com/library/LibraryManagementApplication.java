package com.library;

import com.library.service.BookService;
import org.springframework.beans.BeansException;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        try (var ctx = new ClassPathXmlApplicationContext("spring/applicationContext.xml")) {
            BookService bookService = ctx.getBean("bookService", BookService.class);

            bookService.addBook("Clean Code");
            bookService.addBook("Domain-Driven Design");

            System.out.println("Books in repository:");
            bookService.listBooks().forEach(System.out::println);

        } catch (BeansException e) {
            System.err.println("Failed to start Spring context:");
            e.printStackTrace();
        }
    }
}
