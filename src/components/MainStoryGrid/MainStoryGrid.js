// noinspection CssUnknownProperty

import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {QUERIES} from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
   
  @media ${QUERIES.tabletAndUp} {
    gap: 32px;
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    grid-template-columns: 5fr 4fr 3.5fr;
  }
  
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    margin-right: -16px;
    border-right: 1px solid var(--color-gray-300);
  }
  
`;


const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
   
  & ${StoryList} a:not(:last-child) {
    padding: 16px 0;
    border-bottom: 1px solid var(--color-gray-300);
  }

  & ${StoryList} a:last-child {
    padding-top: 16px;
  }
  
  & ${StoryList} a:first-child {
    padding-top: 0;
  }
`;


const OpinionSection = styled.section`
  grid-area: opinion-stories;
  
  & ${StoryList} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
    gap: 32px;
  }

  & ${StoryList} a:not(:last-child) {
    padding: 8px 0;
    border-bottom: 1px solid var(--color-gray-300);
  }

  & ${StoryList} a:first-child {
    padding-top: 0;
  }

  & ${StoryList} a:last-child {
    padding-top: 8px;
  }
 
  
  @media ${QUERIES.tabletAndUp} {
    & ${StoryList} {
      grid-template-columns: repeat(4, 1fr);
    }

    & ${StoryList} a:nth-child(n) {
      border: none;
    }
  }
  
  @media ${QUERIES.desktopAndUp} {
    padding-top: 0;
    padding-left: 16px;
    margin-left: -16px;
    border-left: 1px solid var(--color-gray-300);
    
    & ${StoryList} {
      gap: 8px;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    & ${StoryList} a:not(:last-child) {
      padding: 8px 0;
      border-bottom: 1px solid var(--color-gray-300);
    }

    & ${StoryList} a:first-child {
      padding-top: 0;
    }

    & ${StoryList} a:last-child {
      padding-top: 8px;
    }
    
  }
  
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
    
  @media ${QUERIES.tabletAndUp} {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
    margin-top: -8px;  
  }
`;

export default MainStoryGrid;
