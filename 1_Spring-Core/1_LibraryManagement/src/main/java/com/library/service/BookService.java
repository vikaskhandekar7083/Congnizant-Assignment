package com.library.service;

import com.library.repository.BookRepository;

import java.util.List;

public class BookService {
    private BookRepository bookRepository;

    // Spring will use setter injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        bookRepository.save(title);
    }

    public List<String> listBooks() {
        return bookRepository.findAll();
    }
}
