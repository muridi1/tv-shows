import { episodeCode } from "../utils/episodeCode";
import {fixText} from "../utils/fixText"

interface IEpisode {
    // id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    // type: string;
    // airdate: string;
    // airtime: string;
    // airstamp: string;
    // runtime: number;
    image: {
      medium: string;
      // original: string;
    };
    summary: string;
    // _links: { self: { href: string } };
  }
  
  function Episodes (props: IEpisode): JSX.Element {
    return (
      <section>
        
        <h2>{props.name}{"-"}{episodeCode(props.season,props.number)}</h2>
        <img src={props.image.medium} alt={props.name}/>
        <p>{fixText(props.summary)}</p>
        <p>
        <a href={props.url}>TVMAZE Weblink</a>
        </p>
        
      </section>
    );
  }
  
  export default Episodes;
  