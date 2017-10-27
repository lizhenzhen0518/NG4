import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'manage-article-list',
  templateUrl: './manage-article-list.html',
  styleUrls: ['./manage-article-list.scss'],
})
export class ManageArticleListComponent implements OnInit {

   pageIndex = 1;
   keyword: string;

  constructor() {}


  ngOnInit() {

  }



}
