import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getHomeContentData() {
    
    // return this.http.get('https://localhost:5001/api/values');
    // var test = this.http.get('http://localhost:5000/api/SampleData/WeatherForecasts')
    // var test = this.http.get('http://localhost:3405/api/values')
    // .subscribe(result => {
    //   var books = result as Array<Book>;
    //   debugger;
    //   return  books;
    // });
    var test = this.http.get('http://localhost:3405/api/values');
    // return this.getComputerBooksData();
    return test;
  }
  getComputerRootContentData() {
    return this.getComputerBooksData();
    // return this.http.get('https://reqres.in/api/users');

  }
  getComputerBooksData() {
    let books: Array<Book> = [];
    let bookJS = new Book();
    bookJS.id = 1;
    bookJS.author = 'Flagan David';
    bookJS.countPage = 320;
    bookJS.currency = 'gr';
    bookJS.description = 'JavaScript is one of the most popular programming languages. Used to write scripts of interactive web pages for more than fifteen years. The book JavaScript: Pocket Guide provides the most important and useful information about the syntax of the JavaScript language. Many examples of practical use, data types, values and variables.';
    bookJS.language = 'Rush';
    bookJS.name = 'JavaScript: pocket guide';
    bookJS.price = 313.00;
    bookJS.urlPic = 'http://books.ua/Product/GetBigImage?code_wares=228093';
    books.push(bookJS);

    let bookCsh = new Book();
    bookCsh.id = 2;
    bookCsh.author = 'Albagary Djozef';
    bookCsh.countPage = 224;
    bookCsh.currency = 'gr';
    bookCsh.description = 'When you need answers to questions about programming in C # 6.0, this practical and highly specialized book will offer exactly what you need to know - without any lengthy introductions or bloated examples.';
    bookCsh.language = 'Rush';
    bookCsh.name = 'C # 6.0. Pocket Guide';
    bookCsh.price = 291.00;
    bookCsh.urlPic = 'http://books.ua/Product/GetBigImage?code_wares=260472';
    books.push(bookCsh);
    console.log(books);



    return books;
  }
}