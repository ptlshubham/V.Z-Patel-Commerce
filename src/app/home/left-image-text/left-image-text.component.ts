import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-image-text',
  templateUrl: './left-image-text.component.html',
  styleUrls: ['./left-image-text.component.css']
})
export class LeftImageTextComponent implements OnInit {
  public homedata: string = 'is established in June 2010 and managed by Charotar Education Society. The Institute is affiliated to the Sardar Patel University and strives to emulate an academic culture that is on a par with the best institutions in the Charotar region. This institute was established in the loving memories of our late Chairman Shri Alpeshbhai N. Patel. It started with only Department of Chemistry for postgraduate studies in 2005 to impart postgraduate education and research in emerging area of basic and applied sciences.At present, the Institute offers eight postgraduate programs and three Ph.Dprograms.'
  public aboutdata: string = 'Shri V. Z. Patel Commerce College, established in 1997, has made its own place in the field of education. It is affiliated to Sardar Patel University, Vallabh Vidyanagar and managed by the oldest, reputed trust Charotar Education Society, Anand established in 1916. The college is named as Shri V. Z. Patel Commerce College in memory of Shri Vitthalbhai Zaverbhai Patel, the elder brother of the Iron Man of India, Shri Sardar Vallabhbhai Patel. Since the beginning the college has been running undergraduate course in commerce. By keeping the modern trends in mind, one more course BBA General was started in 2005. In order to fulfill the necessities of the students and parents BBA ITM was established in 2008. A well equipped laboratory has been erected to make the teaching of these students more convenient and effective.At present the total strength of the college is of 528 students, which suggests its prestige and popularity of the institution. A part from the syllabus, the college has organized various life enrichment programmes to build the career and character of the students.';
  public trustdata: string = 'was established on 16th April 1916 by the Gem of Charotar Shri Motibhai Amin Saheb with a view to developing higher education in the Charotar Pradesh located in the heartland of Gujarat also known as The “Milk City of India”. In commemoration of 100 years of glorious existence, Charotar Education society celebrated its Golden Jubilee during April-2015 to April-2016. \nIn the beginning the Society was managed well by the brothers, Shri Ishwarbhai J. Patel and Late Shri Vitthalbhai J. Patel. Shri Ishwarbhai J. Patel had been the Vice Chancellor of many universities. Charotar Education Society is spread over 41 acres of land and has 4 big campuses in which K.G. to P.G. education is provided to the needful students under dynamic leadership of Mr. Niravkumar N. Patel, Chairman and Mr. Ketanbhai P. Patel, Secretary, Charotar Education Society.';
  public textdata: string = '';
  public abouttitle: string = 'History';
  public trusttitle: string = 'The Trust';
  public title: string = '';
  public subtitle: string = '';
  public asubtitle: string = 'Shri V Z Patel Commerce College';
  public tsubtitle: string = 'Charotar Education Society';
  dimg: string = 'assets/images/about/School_1.jpg';
  himg: string = 'assets/images/about/School.jpg';
  timg: string = 'assets/images/about/33.jpg';
  daimg: string = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.router.url == "/basic/about") {
      this.textdata = this.aboutdata;
      this.daimg = this.dimg;
      this.title = this.abouttitle;
      this.subtitle = this.asubtitle;
    }
    else if (this.router.url == "/basic/trust") {
      this.textdata = this.trustdata;
      this.daimg = this.timg;
      this.title = this.trusttitle;
      this.subtitle = this.tsubtitle;
    }
    else {
      // this.title = this.abouttitle;
      this.subtitle = this.asubtitle;
      this.textdata = this.aboutdata;
      this.daimg = this.himg;

    }
  }



}
