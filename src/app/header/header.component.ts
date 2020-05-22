import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	type: any;
	selectedItem: any = '/home';
  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  	this.type = this.route.snapshot.paramMap.get('type');
  	console.log(this.type);
  	this.selectedItem  = '/' + window.location.href.split('/')[5];
  }

  openUrl(page){
  	this.router.navigate(['/domain/' + this.type + page]);
  }

}


//this.router.navigate( [ routing.path ] , { relativeTo: route , queryParams: paramsInUrl } );
