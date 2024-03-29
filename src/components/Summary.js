import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RichText from './RichText';
import validator from 'validator';

const useStyles = makeStyles((theme) => ({
  formControl: {
    flexGrow: 1,
    minWidth: 240,
  },
  summaryPaper: {
    width: 264,
    border: "2px solid #DDDDDD",
    margin: "auto",
    "word-wrap": "break-word"
  }
}))

export default function Summary(props) {
  const classes = useStyles();
  const { event } = props;
  const linkValidator = (link) => {
    if (validator.isURL(link)) {
      if (validator.isEmail(link)) {
        return "mailto:" + link;
      } else if (!(link.startsWith("http://" || link.startsWith("https://")))) {
        return "https://" + link;
      }
    } else {
      return link;
    }
  }

  return (
    <div className={classes.summaryPaper} >
      <p align="center">
        <img
          src={event.thumbnail}
          width="230" 
          height="150" />
      </p>
      <p align="middle" style={{fontSize: "18px", "padding":"25px 0px 0px 0px"}}>
        <strong>
          {event.title}
        </strong>
      </p>
      <p align="middle" style={{fontSize: "13px", "padding":"15px 0px 15px 0px", lineHeight: "20px"}}>
        <strong><em>
          {event.organisation}
        </em></strong>
      </p>
      <p align="left" style={{fontFamily: "Calibri", padding: "5px", margin: "0px"}}>
        <strong>
          Description: 
        </strong>
        <br />
          <RichText text={event.description}/>
      
      {event.date && (<strong><br />Date: </strong>)}
      {event.date && event.date}
      {event.time && (<strong><br />Time: </strong>)}
      {event.time && event.time}
      {event.venue && (<strong><br />Venue: </strong>)}
      {event.venue && event.venue}
      {event.deadline && (<strong><br />Deadline: </strong>)}
      {event.deadline && event.deadline}
      {event.link && (<strong><br />Link: </strong>)}
      {event.link && (<strong><a href={linkValidator(event.link)}>{event.link}</a></strong>)}
      {event.custom && <RichText text={"\n" + event.custom}/>}
      </p>
    </div>
  )
}