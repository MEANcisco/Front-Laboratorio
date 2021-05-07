import {Component, OnInit} from '@angular/core';
import {CommonServiceService} from '../common-service.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
    blogs: any = [];
    firstBlock: any = [];
    categorias: any = [];
    constructor(public commonService: CommonServiceService) {
    }

    ngOnInit(): void {
        this.getBlogs();
        this.getBlogdetails();
        window.scrollTo(0, 0);
    }

    getBlogs() {
        this.commonService.getBlogs().subscribe((result) => {
            this.blogs = result;
            console.log(this.blogs);

        });
    }

    getBlogdetails() {
        this.commonService.getBlogsDetails(1).subscribe((res) => {
            this.firstBlock = res;
        });
    }
}
