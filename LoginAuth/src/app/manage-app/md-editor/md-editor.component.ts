import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'md-editor',
  styleUrls: ['./md-editor.scss'],
  templateUrl: './md-editor.html',
})
export class MdEditorComponent implements OnInit {
  mdArticle: string;

  articleUrl: string;




  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }


}
