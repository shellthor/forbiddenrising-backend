import { CharacterMediaSummary } from '../../src/blizzard/interfaces/profile/character-media/character-media-summary.interface';

const CharacterMediaSummaryMock = (id: number, name: string): CharacterMediaSummary => ({
  _links: {
    self: {
      href:
        'https://us.api.blizzard.com/profile/wow/character/hyjal/tesali/character-media?namespace=profile-us',
    },
  },
  character: {
    key: {
      href: 'https://us.api.blizzard.com/profile/wow/character/hyjal/tesali?namespace=profile-us',
    },
    name: name,
    id: id,
    realm: {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/realm/1566?namespace=dynamic-us',
      },
      name: 'Area 52',
      id: 1566,
      slug: 'area-52',
    },
  },
  avatar_url: 'https://render-us.worldofwarcraft.com/character/area-52/35/177267491-avatar.jpg',
  bust_url: 'https://render-us.worldofwarcraft.com/character/area-52/35/177267491-inset.jpg',
  render_url: 'https://render-us.worldofwarcraft.com/character/area-52/35/177267491-main.jpg',
});

export default CharacterMediaSummaryMock;
