import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageData : any;
  imageUrl:any = "http://3.16.216.113:3000/images/";
  customOptions: OwlOptions = {
    loop: true,
    
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };

  type: any;
  constructor(public route: ActivatedRoute, public adminService: AdminService, public router: Router) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    
    this.adminService.postData('getUserDomain',{username: this.type}).subscribe((response:any) => {
      if(response.status == 1){
        this.getPageData(response.data._id);
      }else{
        //localStorage.clearAll();
        this.router.navigateByUrl('/auth/error');
      }
    });
    
  }

  getPageData(user_id){
    let dict = {
      "page" : "home",
      "user_id" : user_id
    };
    this.adminService.postData('getPageData',dict).subscribe((response: any) => {
      console.log(response);
      this.pageData = response.data.data;
    });
  }

}
