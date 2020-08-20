import { CharacterSpecializationsSummary } from '../../src/blizzard/interfaces/profile/character-specializations/character-specializations-summary.interface'

const CharacterSpecializationsSummaryMock = (
  id: number,
  name: string,
): CharacterSpecializationsSummary => ({
  _links: {
    self: {
      href:
        'https://us.api.blizzard.com/profile/wow/character/hyjal/tesali/specializations?namespace=profile-us',
    },
  },
  specializations: [
    {
      specialization: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/playable-specialization/270?namespace=static-8.3.0_32861-us',
        },
        name: 'Mistweaver',
        id: 270,
      },
      talents: [
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/20185?namespace=static-8.3.0_32861-us',
            },
            name: 'Chi Burst',
            id: 20185,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/123986?namespace=static-8.3.0_32861-us',
              },
              name: 'Chi Burst',
              id: 123986,
            },
            description:
              'Hurls a torrent of Chi energy up to 40 yds forward, dealing 8,459 Nature damage to all enemies, and 17,395 healing to the Monk and all allies in its path.',
            cast_time: '1 sec cast',
            range: '40 yd range',
            cooldown: '30 sec cooldown',
          },
          tier_index: 0,
          column_index: 2,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/19818?namespace=static-8.3.0_32861-us',
            },
            name: 'Chi Torpedo',
            id: 19818,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/115008?namespace=static-8.3.0_32861-us',
              },
              name: 'Chi Torpedo',
              id: 115008,
            },
            description:
              'Torpedoes you forward a long distance and increases your movement speed by 30% for 10 sec, stacking up to 2 times.',
            cast_time: 'Instant',
          },
          tier_index: 1,
          column_index: 1,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/22166?namespace=static-8.3.0_32861-us',
            },
            name: 'Mana Tea',
            id: 22166,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/197908?namespace=static-8.3.0_32861-us',
              },
              name: 'Mana Tea',
              id: 197908,
            },
            description: 'Reduces the mana cost of your spells by 50% for 12 sec.',
            cast_time: 'Instant',
            cooldown: '1.5 min cooldown',
          },
          tier_index: 2,
          column_index: 2,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/19995?namespace=static-8.3.0_32861-us',
            },
            name: 'Ring of Peace',
            id: 19995,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/116844?namespace=static-8.3.0_32861-us',
              },
              name: 'Ring of Peace',
              id: 116844,
            },
            description:
              'Form a Ring of Peace at the target location for 5 sec. Enemies that enter will be ejected from the Ring.',
            cast_time: 'Instant',
            range: '40 yd range',
            cooldown: '45 sec cooldown',
          },
          tier_index: 3,
          column_index: 2,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/20173?namespace=static-8.3.0_32861-us',
            },
            name: 'Diffuse Magic',
            id: 20173,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/122783?namespace=static-8.3.0_32861-us',
              },
              name: 'Diffuse Magic',
              id: 122783,
            },
            description:
              'Reduces magic damage you take by 60% for 6 sec, and transfers all currently active harmful magical effects on you back to their original caster if possible.',
            cast_time: 'Instant',
            cooldown: '1.5 min cooldown',
          },
          tier_index: 4,
          column_index: 1,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/22101?namespace=static-8.3.0_32861-us',
            },
            name: 'Refreshing Jade Wind',
            id: 22101,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/196725?namespace=static-8.3.0_32861-us',
              },
              name: 'Refreshing Jade Wind',
              id: 196725,
            },
            description:
              'Summon a whirling tornado around you, causing 26,546 healing over 7.9 sec to up to 6 allies within 10 yards.',
            cast_time: 'Instant',
            power_cost: '3,500 Mana',
            cooldown: '9 sec cooldown',
          },
          tier_index: 5,
          column_index: 1,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/22169?namespace=static-8.3.0_32861-us',
            },
            name: 'Upwelling',
            id: 22169,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/274963?namespace=static-8.3.0_32861-us',
              },
              name: 'Upwelling',
              id: 274963,
            },
            description:
              "For every 6 sec Essence Font spends off cooldown, your next Essence Font may be channeled for 1 additional second.\r\n\r\nThe duration of Essence Font's heal over time is increased by 4 sec.",
            cast_time: 'Passive',
          },
          tier_index: 6,
          column_index: 1,
        },
      ],
      glyphs: [
        {
          key: {
            href: 'https://us.api.blizzard.com/data/wow/glyph/1041?namespace=static-8.3.0_32861-us',
          },
          name: 'Glyph of Fighting Pose',
          id: 1041,
        },
        {
          key: {
            href: 'https://us.api.blizzard.com/data/wow/glyph/1028?namespace=static-8.3.0_32861-us',
          },
          name: 'Glyph of Rising Tiger Kick',
          id: 1028,
        },
        {
          key: {
            href: 'https://us.api.blizzard.com/data/wow/glyph/1264?namespace=static-8.3.0_32861-us',
          },
          name: 'Glyph of Crackling Crane Lightning',
          id: 1264,
        },
      ],
      pvp_talent_slots: [
        {
          selected: {
            talent: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/pvp-talent/3577?namespace=static-8.3.0_32861-us',
              },
              name: "Gladiator's Medallion",
              id: 3577,
            },
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/208683?namespace=static-8.3.0_32861-us',
                },
                name: "Gladiator's Medallion",
                id: 208683,
              },
              description:
                'Removes all movement impairing effects and all effects which cause loss of control of your character while in PvP combat.',
              cast_time: 'Instant',
              cooldown: '2 min cooldown',
            },
          },
          slot_number: 1,
        },
        {
          selected: {
            talent: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/pvp-talent/678?namespace=static-8.3.0_32861-us',
              },
              name: 'Chrysalis',
              id: 678,
            },
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/202424?namespace=static-8.3.0_32861-us',
                },
                name: 'Chrysalis',
                id: 202424,
              },
              description: 'Reduces the cooldown of Life Cocoon by 25 sec.',
              cast_time: 'Passive',
            },
          },
          slot_number: 2,
        },
        {
          selected: {
            talent: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/pvp-talent/682?namespace=static-8.3.0_32861-us',
              },
              name: 'Refreshing Breeze',
              id: 682,
            },
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/202523?namespace=static-8.3.0_32861-us',
                },
                name: 'Refreshing Breeze',
                id: 202523,
              },
              description:
                'Increases the healing of Vivify by 20%, and Vivify refreshes the duration of Essence Font on targets it heals.',
              cast_time: 'Passive',
            },
          },
          slot_number: 3,
        },
        {
          selected: {
            talent: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/pvp-talent/679?namespace=static-8.3.0_32861-us',
              },
              name: 'Counteract Magic',
              id: 679,
            },
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/202428?namespace=static-8.3.0_32861-us',
                },
                name: 'Counteract Magic',
                id: 202428,
              },
              description:
                'Renewing Mist heals for 135% more when the target is affected by a magical damage over time effect.',
              cast_time: 'Passive',
            },
          },
          slot_number: 4,
        },
      ],
    },
    {
      specialization: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/playable-specialization/269?namespace=static-8.3.0_32861-us',
        },
        name: 'Windwalker',
        id: 269,
      },
      talents: [
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/20185?namespace=static-8.3.0_32861-us',
            },
            name: 'Chi Burst',
            id: 20185,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/123986?namespace=static-8.3.0_32861-us',
              },
              name: 'Chi Burst',
              id: 123986,
            },
            description:
              'Hurls a torrent of Chi energy up to 40 yds forward, dealing 8,459 Nature damage to all enemies, and 17,395 healing to the Monk and all allies in its path.',
            cast_time: '1 sec cast',
            range: '40 yd range',
            cooldown: '30 sec cooldown',
          },
          tier_index: 0,
          column_index: 2,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/19302?namespace=static-8.3.0_32861-us',
            },
            name: "Tiger's Lust",
            id: 19302,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/116841?namespace=static-8.3.0_32861-us',
              },
              name: "Tiger's Lust",
              id: 116841,
            },
            description:
              "Increases a friendly target's movement speed by 70% for 6 sec and removes all roots and snares.",
            cast_time: 'Instant',
            range: '20 yd range',
            cooldown: '30 sec cooldown',
          },
          tier_index: 1,
          column_index: 2,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/19771?namespace=static-8.3.0_32861-us',
            },
            name: 'Fist of the White Tiger',
            id: 19771,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/261947?namespace=static-8.3.0_32861-us',
              },
              name: 'Fist of the White Tiger',
              id: 261947,
            },
            description:
              'Strike with the technique of the White Tiger, dealing 32,272 Physical damage.\r\n\r\nGenerates 3 Chi.',
            cast_time: 'Instant',
            power_cost: null,
            range: 'Melee Range',
            cooldown: '30 sec cooldown',
          },
          tier_index: 2,
          column_index: 1,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/23364?namespace=static-8.3.0_32861-us',
            },
            name: 'Good Karma',
            id: 23364,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/280195?namespace=static-8.3.0_32861-us',
              },
              name: 'Good Karma',
              id: 280195,
            },
            description: '100% of the damage redirected by Touch of Karma also heals you.',
            cast_time: 'Passive',
          },
          tier_index: 3,
          column_index: 1,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/20173?namespace=static-8.3.0_32861-us',
            },
            name: 'Diffuse Magic',
            id: 20173,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/122783?namespace=static-8.3.0_32861-us',
              },
              name: 'Diffuse Magic',
              id: 122783,
            },
            description:
              'Reduces magic damage you take by 60% for 6 sec, and transfers all currently active harmful magical effects on you back to their original caster if possible.',
            cast_time: 'Instant',
            cooldown: '1.5 min cooldown',
          },
          tier_index: 4,
          column_index: 1,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/22093?namespace=static-8.3.0_32861-us',
            },
            name: 'Hit Combo',
            id: 22093,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/196740?namespace=static-8.3.0_32861-us',
              },
              name: 'Hit Combo',
              id: 196740,
            },
            description:
              'Each successive attack that triggers Combo Strikes in a row grants 1% increased damage, stacking up to 6 times.',
            cast_time: 'Passive',
          },
          tier_index: 5,
          column_index: 0,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/22105?namespace=static-8.3.0_32861-us',
            },
            name: 'Whirling Dragon Punch',
            id: 22105,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/152175?namespace=static-8.3.0_32861-us',
              },
              name: 'Whirling Dragon Punch',
              id: 152175,
            },
            description:
              'Performs a devastating whirling upward strike, dealing 45,750 damage to all nearby enemies. Only usable while both Fists of Fury and Rising Sun Kick are on cooldown.',
            cast_time: 'Instant',
            cooldown: '24 sec cooldown',
          },
          tier_index: 6,
          column_index: 1,
        },
      ],
      pvp_talent_slots: [
        {
          selected: {
            talent: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/pvp-talent/3574?namespace=static-8.3.0_32861-us',
              },
              name: "Gladiator's Medallion",
              id: 3574,
            },
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/208683?namespace=static-8.3.0_32861-us',
                },
                name: "Gladiator's Medallion",
                id: 208683,
              },
              description:
                'Removes all movement impairing effects and all effects which cause loss of control of your character while in PvP combat.',
              cast_time: 'Instant',
              cooldown: '2 min cooldown',
            },
          },
          slot_number: 1,
        },
        {
          selected: {
            talent: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/pvp-talent/3745?namespace=static-8.3.0_32861-us',
              },
              name: 'Turbo Fists',
              id: 3745,
            },
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/287681?namespace=static-8.3.0_32861-us',
                },
                name: 'Turbo Fists',
                id: 287681,
              },
              description:
                'Fists of Fury now deals full damage to all targets hit, reduces all targets movement speed by 90%, and you Parry all attacks while channelling Fists of Fury.',
              cast_time: 'Passive',
            },
          },
          slot_number: 3,
        },
        {
          selected: {
            talent: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/pvp-talent/3734?namespace=static-8.3.0_32861-us',
              },
              name: 'Alpha Tiger',
              id: 3734,
            },
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/287503?namespace=static-8.3.0_32861-us',
                },
                name: 'Alpha Tiger',
                id: 287503,
              },
              description:
                'Attacking new challengers with Tiger Palm fills you with the spirit of Xuen, granting you 30% haste for 8 sec. \r\n\r\nThis effect cannot occur more than once every 30 sec per target.',
              cast_time: 'Passive',
            },
          },
          slot_number: 4,
        },
      ],
    },
    {
      specialization: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/playable-specialization/268?namespace=static-8.3.0_32861-us',
        },
        name: 'Brewmaster',
        id: 268,
      },
      talents: [
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/20185?namespace=static-8.3.0_32861-us',
            },
            name: 'Chi Burst',
            id: 20185,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/123986?namespace=static-8.3.0_32861-us',
              },
              name: 'Chi Burst',
              id: 123986,
            },
            description:
              'Hurls a torrent of Chi energy up to 40 yds forward, dealing 8,459 Nature damage to all enemies, and 17,395 healing to the Monk and all allies in its path.',
            cast_time: '1 sec cast',
            range: '40 yd range',
            cooldown: '30 sec cooldown',
          },
          tier_index: 0,
          column_index: 2,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/19818?namespace=static-8.3.0_32861-us',
            },
            name: 'Chi Torpedo',
            id: 19818,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/115008?namespace=static-8.3.0_32861-us',
              },
              name: 'Chi Torpedo',
              id: 115008,
            },
            description:
              'Torpedoes you forward a long distance and increases your movement speed by 30% for 10 sec, stacking up to 2 times.',
            cast_time: 'Instant',
          },
          tier_index: 1,
          column_index: 1,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/22097?namespace=static-8.3.0_32861-us',
            },
            name: 'Spitfire',
            id: 22097,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/242580?namespace=static-8.3.0_32861-us',
              },
              name: 'Spitfire',
              id: 242580,
            },
            description: 'Tiger Palm has a 25% chance to reset the cooldown of Breath of Fire.',
            cast_time: 'Passive',
          },
          tier_index: 2,
          column_index: 1,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/19994?namespace=static-8.3.0_32861-us',
            },
            name: 'Summon Black Ox Statue',
            id: 19994,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/115315?namespace=static-8.3.0_32861-us',
              },
              name: 'Summon Black Ox Statue',
              id: 115315,
            },
            description:
              'Summons a Black Ox Statue at the target location for 15 min, pulsing threat to all enemies within 20 yards.\r\n\r\nYou may cast Provoke on the statue to taunt all enemies near the statue.',
            cast_time: 'Instant',
            range: '40 yd range',
            cooldown: '10 sec cooldown',
          },
          tier_index: 3,
          column_index: 1,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/20174?namespace=static-8.3.0_32861-us',
            },
            name: 'Bob and Weave',
            id: 20174,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/280515?namespace=static-8.3.0_32861-us',
              },
              name: 'Bob and Weave',
              id: 280515,
            },
            description: 'Increases the duration of Stagger by 3.0 sec.',
            cast_time: 'Passive',
          },
          tier_index: 4,
          column_index: 0,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/20184?namespace=static-8.3.0_32861-us',
            },
            name: 'Rushing Jade Wind',
            id: 20184,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/116847?namespace=static-8.3.0_32861-us',
              },
              name: 'Rushing Jade Wind',
              id: 116847,
            },
            description:
              'Summons a whirling tornado around you, causing 16,548 damage over 5.3 sec to enemies within 8 yards.',
            cast_time: 'Instant',
            power_cost: '1 Chi',
            cooldown: '6 sec cooldown',
          },
          tier_index: 5,
          column_index: 1,
        },
        {
          talent: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/talent/22108?namespace=static-8.3.0_32861-us',
            },
            name: 'Blackout Combo',
            id: 22108,
          },
          spell_tooltip: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/196736?namespace=static-8.3.0_32861-us',
              },
              name: 'Blackout Combo',
              id: 196736,
            },
            description:
              'Blackout Strike also empowers your next ability:\r\n\r\nTiger Palm: Damage increased by 100%.\r\nBreath of Fire: Cooldown reduced by 3 sec.\r\nKeg Smash: Reduces the remaining cooldown on your Brews by 2 additional sec.\r\nIronskin Brew: Pauses Stagger damage for 3 sec.',
            cast_time: 'Passive',
          },
          tier_index: 6,
          column_index: 2,
        },
      ],
      pvp_talent_slots: [
        {
          selected: {
            talent: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/pvp-talent/3571?namespace=static-8.3.0_32861-us',
              },
              name: "Gladiator's Medallion",
              id: 3571,
            },
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/208683?namespace=static-8.3.0_32861-us',
                },
                name: "Gladiator's Medallion",
                id: 208683,
              },
              description:
                'Removes all movement impairing effects and all effects which cause loss of control of your character while in PvP combat.',
              cast_time: 'Instant',
              cooldown: '2 min cooldown',
            },
          },
          slot_number: 1,
        },
        {
          selected: {
            talent: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/pvp-talent/667?namespace=static-8.3.0_32861-us',
              },
              name: 'Hot Trub',
              id: 667,
            },
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/202126?namespace=static-8.3.0_32861-us',
                },
                name: 'Hot Trub',
                id: 202126,
              },
              description:
                'Purifying Brew deals 20% of your purified staggered damage as Fire, divided between all enemies within 10 yards.',
              cast_time: 'Passive',
            },
          },
          slot_number: 2,
        },
        {
          selected: {
            talent: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/pvp-talent/672?namespace=static-8.3.0_32861-us',
              },
              name: 'Double Barrel',
              id: 672,
            },
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/202335?namespace=static-8.3.0_32861-us',
                },
                name: 'Double Barrel',
                id: 202335,
              },
              description:
                'Your next Keg Smash deals 50% additional damage, and stuns all targets it hits for 3 sec.',
              cast_time: 'Instant',
              cooldown: '45 sec cooldown',
            },
          },
          slot_number: 3,
        },
        {
          selected: {
            talent: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/pvp-talent/843?namespace=static-8.3.0_32861-us',
              },
              name: 'Admonishment',
              id: 843,
            },
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/207025?namespace=static-8.3.0_32861-us',
                },
                name: 'Admonishment',
                id: 207025,
              },
              description:
                'You focus the assault on this target, increasing their damage taken by 3% for 6 sec.  Each unique player that attacks the target increases the damage taken by an additional 3%, stacking up to 5 times.\r\n\r\nYour melee attacks refresh the duration of Focused Assault.',
              cast_time: 'Instant',
              range: '10 yd range',
              cooldown: '20 sec cooldown',
            },
          },
          slot_number: 4,
        },
      ],
    },
  ],
  active_specialization: {
    key: {
      href:
        'https://us.api.blizzard.com/data/wow/playable-specialization/270?namespace=static-8.3.0_32861-us',
    },
    name: 'Mistweaver',
    id: 270,
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
})

export default CharacterSpecializationsSummaryMock
