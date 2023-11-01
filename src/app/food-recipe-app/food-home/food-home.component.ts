import { Component ,OnInit} from '@angular/core';
import { RecipiApiService } from 'src/app/services/recipi-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-food-home',
  templateUrl: './food-home.component.html',
  styleUrls: ['./food-home.component.scss']
})
export class FoodHomeComponent implements OnInit{

  allRecipies:any =[]
  constructor(private recipiService:RecipiApiService,private sanitizer: DomSanitizer){}
  
  ngOnInit(): void {
    
    this.getRecipiDetails('')
}
getRecipiDetails(recipiName:any){
  this.recipiService.getRecipi(recipiName).subscribe({
    next : (data:any) => {
      this.allRecipies = data.meals
      console.log(this.allRecipies)
    },error(err) {
      console.log(err)
    },
  })
}

getVideoUrl(youtubeUrl: string): SafeResourceUrl {
  // Extract the video ID from the YouTube URL
  const videoId = youtubeUrl.split('v=')[1];
  const sanitizedUrl = `https://www.youtube.com/embed/${videoId}`;
  return this.sanitizer.bypassSecurityTrustResourceUrl(sanitizedUrl);
}

}