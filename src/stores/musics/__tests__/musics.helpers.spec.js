import { addRating } from '../musics.helpers'

describe('musics helpers', () => {
  it('should add rating propertie to music', () => {
    const music = {
      id: 1,
      artist: 'Test',
      name: 'Testing',
      votes: 0,
      totalVotes: 0
    }

    const expectedMusic = {
      id: 1,
      artist: 'Test',
      name: 'Testing',
      rating: 0,
      votes: 0,
      totalVotes: 0
    }

    expect(addRating(music)).toEqual(expectedMusic)
  })

  it('should add rating propertie with value 5', () => {
    const music = {
      id: 1,
      artist: 'Test',
      name: 'Testing',
      votes: 25,
      totalVotes: 5
    }

    const expectedMusic = {
      id: 1,
      artist: 'Test',
      name: 'Testing',
      rating: 5,
      votes: 25,
      totalVotes: 5
    }

    expect(addRating(music)).toEqual(expectedMusic)
  })

  it('should add rating propertie with value 3.4', () => {
    const music = {
      id: 1,
      artist: 'Test',
      name: 'Testing',
      votes: 17,
      totalVotes: 5
    }

    const expectedMusic = {
      id: 1,
      artist: 'Test',
      name: 'Testing',
      rating: 3.4,
      votes: 17,
      totalVotes: 5
    }

    expect(addRating(music)).toEqual(expectedMusic)
  })
})
