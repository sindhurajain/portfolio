import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import "./workexp.css"


import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';
  
const WorkExp = () => {
  return (
    <Timeline className="tl"       sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}>
    <TimelineItem>
      <TimelineOppositeContent color="black">
      <Typography variant="h6" fontFamily= 'var(--body-font)' component="span">
      May 2023 - Jul 2023
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined"
               sx={{
                borderColor: "black"
                }}
        />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent color="black">
        <Typography component="span"
                              sx={{
                                fontSize: "large",
                                fontWeight:"bold",
                                fontFamily: 'var(--body-font)'
                                }}>
        Machine Learning Research Intern (Full-Time, Ongoing)
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "medium",
            fontFamily: 'var(--body-font)'
            }}>
            <br></br>
          Agency for Science, Technology and Research
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "small",
            fontFamily: 'var(--body-font)'
            }}>
            <br></br>
            ● Using Tensorflow to explore generative models such as GANs and Variational Autoencoders for
query synthesis in active learning for regression in analogue circuit design application
          </Typography>
          </TimelineContent>
    </TimelineItem>
    <TimelineItem>

      <TimelineOppositeContent color="black">
      <Typography variant="h6" component="span" fontFamily= 'var(--body-font)'>
      Jan 2023 - Apr 2023
        </Typography>
    </TimelineOppositeContent>

    <TimelineSeparator>
      <TimelineDot variant="outlined"
               sx={{
                borderColor: "black"
                }}
        />
        <TimelineConnector/>      
        </TimelineSeparator>
    <TimelineContent color="black">
      <Typography component="span"
                              sx={{
                                fontSize: "large",
                                fontWeight:"bold",
                                fontFamily: 'var(--body-font)'
                                }}>
        Research Assistant (Part-Time)
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "medium",
            fontFamily: 'var(--body-font)'
            }}>
            <br></br>
            National University of Singapore
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "small",
            fontFamily: 'var(--body-font)'
            }}>
            <br></br>
            ● Wrote Python scripts using Epitran library for grapheme-to-phoneme conversion of poetry written
in various languages for “Universals in Language Iconicity” linguistics research project
<br></br>
● Built web scraper in Python using BeautifulSoup to create corpus of Thai poetry
          </Typography>
      </TimelineContent>
    </TimelineItem>


    <TimelineItem>
      <TimelineOppositeContent color="black">
      <Typography variant="h6" component="span" fontFamily= 'var(--body-font)'>
      Jan 2023 - Apr 2023
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
      <TimelineDot variant="outlined"
               sx={{
                borderColor: "black"
                }}
        />
        <TimelineConnector />      
        </TimelineSeparator>
      <TimelineContent color="black">
      <Typography component="span"
                              sx={{
                                fontSize: "large",
                                fontWeight:"bold",
                                fontFamily: 'var(--body-font)'
                                }}>
        Teaching Assistant (Part-Time)
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "medium",
            fontFamily: 'var(--body-font)'
            }}>
            <br></br>
            School of Computing, National University of Singapore
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "small",
            fontFamily: 'var(--body-font)'
            }}>
            <br></br>
            ● Conducted 2 weekly tutorial sessions of 30 students each for Digital Ethics & Data Privacy class
            <br></br>
● Led discussions on case studies, reinforced content and graded assignments
          </Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
    <TimelineOppositeContent color="black">
      <Typography variant="h6" component="span" fontFamily= 'var(--body-font)'>
      Sept 2022 - Jan 2023
        </Typography>
    </TimelineOppositeContent>

      <TimelineSeparator>
      <TimelineDot variant="outlined"
               sx={{
                borderColor: "black"
                }}
        />
        <TimelineConnector />

        </TimelineSeparator>
        <TimelineContent color="black">
      <Typography component="span"
                              sx={{
                                fontSize: "large",
                                fontWeight:"bold",
                                fontFamily: 'var(--body-font)'
                                }}>
        Software Engineering Intern (Part-Time)
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "medium",
            fontFamily: 'var(--body-font)'
            }}>
            <br></br>
            Centre for Quantum Technologies
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "small",
            fontFamily: 'var(--body-font)'
            }}>
            <br></br>
            ● Developed a machine learning model in Python using Keras and Numpy libraries to classify
images of clouds by percentage cloud cover<br></br>
            ● Generated image samples and plots of model accuracy and prediction accuracy using Matplotlib
            <br></br>
            ● Improved model accuracy from 40% to 90% by balancing classes and using early stopping to
reduce overfitting
            <br></br>
            ● Integrated it into a website using Streamlit and used Pandas dataframe to output predictions of
test images as downloadable CSV file
          </Typography>
      </TimelineContent>
    </TimelineItem>
  </Timeline>

  );
};
  
export default WorkExp;

/*
      <TimelineConnector 
                      sx={{
                        backgroundColor: "black"
                        }}
                        />
        */