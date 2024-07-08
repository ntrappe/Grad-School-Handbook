import { Heading, Text, Timeline, Octicon, Label } from '@primer/react'
import { FlameIcon, IssueClosedIcon, ReadIcon, UnverifiedIcon } from '@primer/octicons-react';

function GettingStarted() {
  return (
    <>
      <Heading>Getting Started</Heading>
      <Text fontSize={2}>
        Welcome to the Grad School Handbook. Back in 2023, I was exactly where you are now. I went 
        through the same process: debating on attending graduate school, filling out my application, 
        and waiting for a response. 
        <br/><br/>
        If you’re currently feeling overwhelmed, confused, or anxious...perfect!
        You’re <i>exactly</i> where you need to be. What you’re feeling is completely normal and expected. 
        <br/><br/>
        This guide is an amalgamation of everything I learned. It’s full of the advice I received, 
        mistakes I made, and sources I relied on. It should elucidate the process of applying to graduate 
        school and—most importantly—give you the tools you need to make that next step.
      </Text>
      <Text fontSize={3}>Time, Money, & Energy</Text>
      {/* <p>Welcome! So you're thinking about going to graduate school? Exciting!</p>
      <Text fontSize={2}>The Process at a Glance</Text>
      <Timeline>
        <Timeline.Item>
          <Timeline.Badge sx={{bg: 'danger.emphasis'}}>
            <Octicon icon={FlameIcon} color='fg.onEmphasis' />
          </Timeline.Badge>
          <Timeline.Body>
            Decide on <b>degree program</b> and area of <b>specialization</b>
            <Label variant='secondary' sx={{marginLeft: '10px'}}>3 months out</Label>
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge sx={{bg: 'success.emphasis'}}>
            <Octicon icon={ReadIcon} color='fg.onEmphasis' />
          </Timeline.Badge>
          <Timeline.Body>
            Research <b>scholarships</b> and financial aid opportunities
            <Label variant='secondary' sx={{marginLeft: '10px'}}>3 months out</Label>
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge sx={{bg: 'success.emphasis'}}>
            <Octicon icon={IssueClosedIcon} color='fg.onEmphasis' />
          </Timeline.Badge>
          <Timeline.Body>
            Ask potential recommenders for letters of recommendation
            <Label variant='secondary' sx={{marginLeft: '10px'}}>3 months out</Label>
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge>
            <Octicon icon={UnverifiedIcon} />
          </Timeline.Badge>
          <Timeline.Body>
            Interview current students or alumni from your desired programs
            <Label variant='default' sx={{marginLeft: '10px'}}>2-3 months out</Label>
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge>
            <Octicon icon={UnverifiedIcon} />
          </Timeline.Badge>
          <Timeline.Body>
            Develop a plan for application requirements and deadlines
            <Label variant='accent' sx={{marginLeft: '10px'}}>2-3 months out</Label>
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge>
            <Octicon icon={UnverifiedIcon} />
          </Timeline.Badge>
          <Timeline.Body>
            Draft personal statements and essays for applications
            <Label variant='danger' sx={{marginLeft: '10px'}}>1-2 months out</Label>
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Break />
      </Timeline> */}
    </>
  )
}

export default GettingStarted;