import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    { 
      title: "My First Doc",
      description: "this is a description",
      file_url: "http://google.com",
      updated_at: '02/05/18',
      image_url: "http://google.com"
    },
    { 
      title: "My Second Doc",
      description: "this is a description",
      file_url: "http://google.com",
      updated_at: '02/05/18',
      image_url: "http://google.com"
    },
    { 
      title: "My Third Doc",
      description: "this is a description",
      file_url: "http://google.com",
      updated_at: '02/05/18',
      image_url: "http://google.com"
    }
  ]
}