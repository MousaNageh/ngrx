export interface AboutUs {
    title: string;
    video: string;
    story_title: string;
    story_description: string;
    story_image1: string;
    story_image2: string;
    started_title: string;
    mission_title: string;
    mission_description: string;
    mission_image: string;
    vision_title: string;
    vision_description: string;
    vision_image: string;
    about_us_history: AboutUsHistory[];
  }
  export class AboutUsHistory {
    date: any;
    description: any;
  }
  