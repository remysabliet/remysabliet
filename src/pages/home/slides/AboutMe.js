import React, { Fragment } from "react"
import MainCanvas from 'components/organisms/drawer/canvas/MainCanvas'

const AboutMe = () => (
  <Fragment>
    <p> This is a short story about me</p>
    <p> This is a long story or a short story about me</p>
    <p>
      ABCD From the Middle Ages until about the middle of the 20th
      century, Latin was a central part of a man’s schooling in the West.
      Along with logic and rhetoric, grammar (as Latin was then known) was
      included as part of the Trivium – the foundation of a medieval
      liberal arts education. From Latin, all scholarship flowed an it was
      truly the gateway to the life of the mind, as the bulk of
      scientific, 3religious, legal, and philosophical literature was
      written in the language until about the 16th century. To immerse
      oneself in classical and humanistic studies, Latin was a must.
    </p>
    <MainCanvas width={300} height={400}/>
  </Fragment>
)

export default AboutMe;

          
