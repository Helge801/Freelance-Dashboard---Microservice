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
      image_url: "https://media.licdn.com/mpr/mpr/AAIA_wDGAAAAAQAAAAAAAAmaAAAAJDZkMDI3MzNjLWEwY2UtNDBkZC1iMjFkLWI1MzFjNWQ1Zjk2YQ.jpg"
    },
    { 
      title: "My Second Doc",
      description: "this is a description",
      file_url: "http://google.com",
      updated_at: '02/05/18',
      image_url: "https://themerkle.com/wp-content/uploads/2017/08/freelance.jpg"
    },
    { 
      title: "My Third Doc",
      description: "this is a description",
      file_url: "http://google.com",
      updated_at: '02/05/18',
      image_url: "https://theopenmic.co/wp-content/uploads/2016/01/freelancer.jpg"
    }
  ]
}