import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name = 'Vietvufx';
  title !: string;
  alt !: string;
  typePost: string = 'TIN_TUC_CAP_NHAT' 
  fileToUpload: string | undefined;
  isLoading = false;
  isLogin = false;
  shortContent = '';
  content !: string;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '10em',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
  constructor(private _router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.typePost = localStorage.getItem("typePost")||"";
    this.title = localStorage.getItem("title")||"";
    this.shortContent=localStorage.getItem("shortContent")||"";
    this.content=localStorage.getItem("content")||"";
    this.verifyToken()
  }


  async wait(ms: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, ms));
  }
  onSave() {
    console.log(this.typePost)
    this.isLoading = true;
    localStorage.setItem("typePost", this.typePost)
    localStorage.setItem("title", this.title)
    localStorage.setItem("shortContent", this.shortContent)
    localStorage.setItem("content", this.content)
    this.isLoading = false
    // this.wait(1000).then(() => this.isLoading = false);
  }

  handleFileInput(event: Event) {
    let target= event.target as HTMLInputElement;
    let file = (target.files as FileList)[0];
    var formData: any = new FormData();
    formData.append("image", file);
    let token = localStorage.getItem("accessToken")
    let headers = { "Authorization": "Bearer " + token }
    this.http.post<any>(environment.apiURL+environment.apiCvtBase64,formData, {headers} ).subscribe(res => {
      this.fileToUpload = res.data;
    });
}

  async onUpload(){
    this.isLoading = true;
    let token = localStorage.getItem("accessToken")
    let headers = { "Authorization": "Bearer " + token }
    let body = 
    {
      "alt": this.alt,
      "shortContent": this.shortContent,
      "content": this.content,
      "image": this.fileToUpload,
      "title": this.title,
      "typePost": this.typePost
    }
    try {
      let res = await this.http.post<any>(environment.apiURL + environment.apiMakeContent, body, { headers }).toPromise()
      console.log(res)
      
    } catch (error) {
    this.wait(1000).then(() => this.isLoading = false);
      
    }
    this.wait(1000).then(() => this.isLoading = false);


  }

  async verifyToken() {
    let token = localStorage.getItem("accessToken")
    if (token) {
      let headers = { "Authorization": "Bearer " + token }
      try {
        let res = await this.http.get<any>(environment.apiURL + environment.apiVerify, { headers }).toPromise()
        if (res?.code == 0) {
          this.isLogin = true;
        }
      } catch (error) {
        this.isLogin = false;
      }
    }
    if (!this.isLogin) {
      this._router.navigate(['./login'])
    }

  }
}
