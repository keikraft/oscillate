import React from 'react';
import styled from 'styled-components';

import {Genres} from 'sdk/genres';
import {useSettings} from 'context/SettingsContext';

import {Slider} from 'components/Slider';
import {Select} from 'components/Select';

const SettingsMenuContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 48px 0;
  overflow-y: auto;
`;

type GenreOption = {label: string; value: string};

export const MenuContent: React.FC = () => {
  const [settingsState, dispatch] = useSettings();
  const [genreOptions, setGenreOptions] = React.useState<GenreOption[]>([]);

  React.useEffect(() => {
    Genres.getAvailableGenres().then((genres) =>
      setGenreOptions(genres.map((genre) => ({label: genre, value: genre}))),
    );
  }, []);

  return (
    <SettingsMenuContent>
      <Select
        isSearchable={true}
        label="genre"
        options={genreOptions}
        value={{label: settingsState.genre, value: settingsState.genre}}
        onChange={(option) =>
          dispatch({type: 'SET_GENRE', value: (option as GenreOption)?.value ?? 'techno'})
        }
      />
      <Slider
        label="danceability"
        min={0}
        max={100}
        step={10}
        unit="%"
        value={settingsState.danceability}
        onChange={(value) => dispatch({type: 'SET_DANCEABILITY', value: parseInt(value)})}
      />
      <Slider
        label="energy"
        min={0}
        max={100}
        step={10}
        unit="%"
        value={settingsState.energy}
        onChange={(value) => dispatch({type: 'SET_ENERGY', value: parseInt(value)})}
      />
      <Slider
        label="popularity"
        min={0}
        max={100}
        step={10}
        unit="%"
        value={settingsState.popularity}
        onChange={(value) => dispatch({type: 'SET_POPULARITY', value: parseInt(value)})}
      />
      <Slider
        label="instrumentalness"
        min={0}
        max={100}
        step={10}
        unit="%"
        value={settingsState.instrumentalness}
        onChange={(value) => dispatch({type: 'SET_INSTRUMENTALNESS', value: parseInt(value)})}
      />
      <Slider
        label="tempo"
        min={120}
        max={360}
        step={30}
        unit="bpm"
        value={settingsState.tempo}
        onChange={(value) => dispatch({type: 'SET_TEMPO', value: parseInt(value)})}
      />
      <Slider
        label="valence"
        min={0}
        max={100}
        step={10}
        unit="%"
        value={settingsState.valence}
        onChange={(value) => dispatch({type: 'SET_VALENCE', value: parseInt(value)})}
      />
    </SettingsMenuContent>
  );
};
