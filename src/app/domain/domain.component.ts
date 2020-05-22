import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  type: any;
  constructor(public route: ActivatedRoute, public adminService: AdminService, public router: Router) { }

  ngOnInit() {
  	
  	this.type = this.route.snapshot.paramMap.get('type');
	
  	this.adminService.postData('getUserDomain',{username: this.type}).subscribe((response: any) => {
      if(response.status == 1){
      	localStorage.setItem('token', response.data._id);
      	this.router.navigate(['/domain/'+ this.type + '/home']);
      }else{
        //localStorage.clearAll();
      	this.router.navigateByUrl('/auth/error');
      }
    });
  }

}
