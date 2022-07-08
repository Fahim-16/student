import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
data=[
  {"name":"riya","age":20,"photo":"https://tse4.mm.bing.net/th?id=OIP.sVVB9SERkuOQQNu3XP2uFAHaJi&pid=Api&P=0&w=129&h=167"},
{"name":"nisha","age":21,"photo":"https://tse4.mm.bing.net/th?id=OIP.sVVB9SERkuOQQNu3XP2uFAHaJi&pid=Api&P=0&w=129&h=167"},
{"name":"miya","age":22,"photo":"https://tse4.mm.bing.net/th?id=OIP.sVVB9SERkuOQQNu3XP2uFAHaJi&pid=Api&P=0&w=129&h=167"},
{"name":"athul","age":23,"photo":"https://tse4.mm.bing.net/th?id=OIP.sVVB9SERkuOQQNu3XP2uFAHaJi&pid=Api&P=0&w=129&h=167"},
{"name":"nikhil","age":24,"photo":"https://tse4.mm.bing.net/th?id=OIP.sVVB9SERkuOQQNu3XP2uFAHaJi&pid=Api&P=0&w=129&h=167"},
{"name":"gautham","age":25,"photo":"https://tse4.mm.bing.net/th?id=OIP.sVVB9SERkuOQQNu3XP2uFAHaJi&pid=Api&P=0&w=129&h=167"}
]
}
