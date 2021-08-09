import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { EditorModule } from "@tinymce/tinymce-angular";
import {BlogComponent} from './blog.component';

import {blogRoutingModule} from './blog-routing.module';

@NgModule({
    declarations: [BlogComponent],
    imports: [
        EditorModule,
        CommonModule,
        FormsModule,
        blogRoutingModule
    ]
})
export class BlogModule {
}
