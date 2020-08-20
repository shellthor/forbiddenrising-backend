import { CharacterEquipmentSummary } from '../../src/blizzard/interfaces/profile/character-equipment/character-equipment-summary.interface'

const CharacterEquipmentSummaryMock = (id: number, name: string): CharacterEquipmentSummary => ({
  _links: {
    self: {
      href:
        'https://us.api.blizzard.com/profile/wow/character/hyjal/tesali/equipment?namespace=profile-us',
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
  equipped_items: [
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/174132?namespace=static-8.3.0_32861-us',
        },
        id: 174132,
      },
      slot: {
        type: 'HEAD',
        name: 'Head',
      },
      quantity: 1,
      context: 6,
      bonus_list: [4824, 1517, 4786, 6511],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: 'Stygian Guise',
      modified_appearance_id: 108119,
      azerite_details: {
        selected_powers: [
          {
            id: 13,
            tier: 0,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/263978?namespace=static-8.3.0_32861-us',
                },
                name: 'Azerite Empowered',
                id: 263978,
              },
              description:
                'Increases Item Level by 5 and increases the potency of all Azerite powers granted by this item.',
              cast_time: 'Passive',
            },
            is_display_hidden: true,
          },
          {
            id: 83,
            tier: 1,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/268437?namespace=static-8.3.0_32861-us',
                },
                name: 'Impassive Visage',
                id: 268437,
              },
              description:
                'When you take damage, heal for 14,833. Cannot occur more than once every 6 sec.',
              cast_time: 'Passive',
            },
          },
          {
            id: 463,
            tier: 2,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/267889?namespace=static-8.3.0_32861-us',
                },
                name: 'Blessed Portents',
                id: 267889,
              },
              description:
                'Your healing spells have a chance to apply Blessed Portents for 20 sec. When the ally falls below 50% health, Blessed Portents is consumed and instantly restores 22,649 health.',
              cast_time: 'Passive',
            },
          },
          {
            id: 582,
            tier: 3,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/317137?namespace=static-8.3.0_32861-us',
                },
                name: 'Heart of Darkness',
                id: 317137,
              },
              description:
                'Your secondary stats are all increased by 94 while your Corruption Level is 25 or higher.',
              cast_time: 'Passive',
            },
          },
          {
            id: 76,
            tier: 4,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/287829?namespace=static-8.3.0_32861-us',
                },
                name: 'Secret Infusion',
                id: 287829,
              },
              description:
                'After using Thunder Focus Tea, your next spell gives 906 of a stat for 10 sec:\r\nEnveloping Mist: Critical strike\r\nRenewing Mist: Haste\r\nVivify: Mastery\r\nRising Sun Kick: Versatility',
              cast_time: 'Passive',
            },
          },
        ],
        selected_powers_string: 'Fully Upgraded',
      },
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/174132?namespace=static-8.3.0_32861-us',
        },
        id: 174132,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/2?namespace=static-8.3.0_32861-us',
        },
        name: 'Leather',
        id: 2,
      },
      inventory_type: {
        type: 'HEAD',
        name: 'Head',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      armor: {
        value: 516,
        display: {
          display_string: '516 Armor',
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1,
          },
        },
      },
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 1514,
          display: {
            display_string: '+1,514 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'AGILITY',
            name: 'Agility',
          },
          value: 1514,
          is_negated: true,
          display: {
            display_string: '+1,514 Agility',
            color: {
              r: 128,
              g: 128,
              b: 128,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 3750,
          display: {
            display_string: '+3,750 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
      ],
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 480,
        display_string: 'Item Level 480',
      },
      transmog: {
        item: {
          key: {
            href: 'https://us.api.blizzard.com/data/wow/item/23323?namespace=static-8.3.0_32861-us',
          },
          name: 'Crown of the Fire Festival',
          id: 23323,
        },
        display_string: 'Transmogrified to:\nCrown of the Fire Festival',
        item_modified_appearance_id: 9206,
      },
      durability: {
        value: 100,
        display_string: 'Durability 100 / 100',
      },
      name_description: {
        display_string: 'Mythic',
        color: {
          r: 0,
          g: 255,
          b: 0,
          a: 1,
        },
      },
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/158075?namespace=static-8.3.0_32861-us',
        },
        id: 158075,
      },
      slot: {
        type: 'NECK',
        name: 'Neck',
      },
      quantity: 1,
      context: 11,
      bonus_list: [6316, 4932, 4933],
      quality: {
        type: 'ARTIFACT',
        name: 'Artifact',
      },
      name: 'Heart of Azeroth',
      azerite_details: {
        percentage_to_next_level: 0.4779136856681283,
        selected_essences: [
          {
            slot: 0,
            rank: 4,
            main_spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/299374?namespace=static-8.3.0_32861-us',
                },
                name: 'Memory of Lucid Dreams',
                id: 299374,
              },
              description:
                'Clear your mind and attune yourself with the Heart of Azeroth, increasing your Mana generation rate by 100% and your Leech by 1,483 for 18 sec.',
              cast_time: 'Instant',
              cooldown: '2 min cooldown',
            },
            passive_spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/299373?namespace=static-8.3.0_32861-us',
                },
                name: 'Lucid Dreams',
                id: 299373,
              },
              description:
                'Your spells and abilities have a chance to refund 50% of the Mana spent on them, heal you for 43,722, and increase your Versatility by 353 for 8 sec.',
              cast_time: 'Passive',
            },
            essence: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/azerite-essence/27?namespace=static-8.3.0_32861-us',
              },
              name: 'Memory of Lucid Dreams',
              id: 27,
            },
            media: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/media/azerite-essence/27?namespace=static-8.3.0_32861-us',
              },
              id: 27,
            },
          },
          {
            slot: 1,
            rank: 4,
            passive_spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/299879?namespace=static-8.3.0_32861-us',
                },
                name: 'The Ever-Rising Tide',
                id: 299879,
              },
              description:
                'Your heals have a chance to grant either 3,730 Intellect for 10 sec or 2,720 mana. Chance of receiving mana increases with your missing mana. 20% chance to gain both effects.',
              cast_time: 'Passive',
            },
            essence: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/azerite-essence/17?namespace=static-8.3.0_32861-us',
              },
              name: 'The Ever-Rising Tide',
              id: 17,
            },
            media: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/media/azerite-essence/17?namespace=static-8.3.0_32861-us',
              },
              id: 17,
            },
          },
          {
            slot: 2,
            rank: 3,
            passive_spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/313920?namespace=static-8.3.0_32861-us',
                },
                name: 'Symbiotic Presence',
                id: 313920,
              },
              description:
                'Each time any ally within 40 yds uses an Azerite Essence, gain 925 Intellect and 86 Haste for 20 sec.\r\n\r\nThe ally who used an Azerite Essence also gains 86 Haste for 20 sec. Only one ally can have this Haste effect at a time.\r\n\r\nUnique: Corruption Resistance increased by 10.',
              cast_time: 'Passive',
            },
            essence: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/azerite-essence/37?namespace=static-8.3.0_32861-us',
              },
              name: 'The Formless Void',
              id: 37,
            },
            media: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/media/azerite-essence/37?namespace=static-8.3.0_32861-us',
              },
              id: 37,
            },
          },
          {
            slot: 3,
            rank: 3,
            passive_spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/304123?namespace=static-8.3.0_32861-us',
                },
                name: 'Strife',
                id: 304123,
              },
              description:
                'Your spells and abilities have a chance to increase your Versatility by 50 for 20 sec, stacking up to 11 times. Being the vicitim of a loss of control or movement impairing effect also grants a stack of Strife.',
              cast_time: 'Passive',
            },
            essence: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/azerite-essence/32?namespace=static-8.3.0_32861-us',
              },
              name: 'Conflict and Strife',
              id: 32,
            },
            media: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/media/azerite-essence/32?namespace=static-8.3.0_32861-us',
              },
              id: 32,
            },
          },
        ],
        level: {
          value: 90,
          display_string: 'Azerite Power Level 90',
        },
      },
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/158075?namespace=static-8.3.0_32861-us',
        },
        id: 158075,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-8.3.0_32861-us',
        },
        name: 'Miscellaneous',
        id: 0,
      },
      inventory_type: {
        type: 'NECK',
        name: 'Neck',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      unique_equipped: 'Unique',
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 609,
          display: {
            display_string: '+609 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'AGILITY',
            name: 'Agility',
          },
          value: 609,
          is_negated: true,
          display: {
            display_string: '+609 Agility',
            color: {
              r: 128,
              g: 128,
              b: 128,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STRENGTH',
            name: 'Strength',
          },
          value: 609,
          is_negated: true,
          display: {
            display_string: '+609 Strength',
            color: {
              r: 128,
              g: 128,
              b: 128,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 1210,
          display: {
            display_string: '+1,210 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CRIT_RATING',
            name: 'Critical Strike',
          },
          value: 392,
          is_equip_bonus: true,
          display: {
            display_string: '+392 Critical Strike',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'HASTE_RATING',
            name: 'Haste',
          },
          value: 392,
          is_equip_bonus: true,
          display: {
            display_string: '+392 Haste',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'MASTERY_RATING',
            name: 'Mastery',
          },
          value: 392,
          is_equip_bonus: true,
          display: {
            display_string: '+392 Mastery',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
      ],
      spells: [
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/277253?namespace=static-8.3.0_32861-us',
            },
            name: 'Heart of Azeroth',
            id: 277253,
          },
          description:
            'Equip: Harnesses the energy of raw Azerite, awakening exceptional pieces of armor that possess latent powers.',
        },
      ],
      requirements: {
        level: {
          value: 110,
          display_string: 'Requires Level 110',
        },
      },
      description:
        'A living symbol of hope, borne by the champions of a dying planet. The fate of Azeroth will be shared by all her children.',
      level: {
        value: 513,
        display_string: 'Item Level 513',
      },
      is_subclass_hidden: true,
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/159339?namespace=static-8.3.0_32861-us',
        },
        id: 159339,
      },
      slot: {
        type: 'SHOULDER',
        name: 'Shoulders',
      },
      quantity: 1,
      context: 35,
      bonus_list: [5448, 1647, 4786, 6512],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: "Gorak Tul's Mantle",
      modified_appearance_id: 98479,
      azerite_details: {
        selected_powers: [
          {
            id: 13,
            tier: 0,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/263978?namespace=static-8.3.0_32861-us',
                },
                name: 'Azerite Empowered',
                id: 263978,
              },
              description:
                'Increases Item Level by 5 and increases the potency of all Azerite powers granted by this item.',
              cast_time: 'Passive',
            },
            is_display_hidden: true,
          },
          {
            id: 218,
            tier: 1,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/274762?namespace=static-8.3.0_32861-us',
                },
                name: 'Strength of Spirit',
                id: 274762,
              },
              description: 'While Fortifying Brew is active, heal for 5,459 every second.',
              cast_time: 'Passive',
            },
          },
          {
            id: 38,
            tier: 2,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/267879?namespace=static-8.3.0_32861-us',
                },
                name: 'On My Way',
                id: 267879,
              },
              description: 'Increases your Versatility by 120 and your Speed by 60.',
              cast_time: 'Passive',
            },
          },
          {
            id: 193,
            tier: 3,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/273823?namespace=static-8.3.0_32861-us',
                },
                name: 'Blightborne Infusion',
                id: 273823,
              },
              description:
                'Your spells and abilities have a chance to draw a Wandering Soul from Thros to serve you for 14 sec. The Soul increases your Critical Strike by 1,813.',
              cast_time: 'Passive',
            },
          },
          {
            id: 387,
            tier: 4,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/278576?namespace=static-8.3.0_32861-us',
                },
                name: 'Uplifted Spirits',
                id: 278576,
              },
              description:
                'Your Vivify heals for an additional 2,270. Vivify critical heals reduce the cooldown of your Revival by 1.0 sec.',
              cast_time: 'Passive',
            },
          },
        ],
        selected_powers_string: 'Fully Upgraded',
      },
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/159339?namespace=static-8.3.0_32861-us',
        },
        id: 159339,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/2?namespace=static-8.3.0_32861-us',
        },
        name: 'Leather',
        id: 2,
      },
      inventory_type: {
        type: 'SHOULDER',
        name: 'Shoulder',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      armor: {
        value: 477,
        display: {
          display_string: '477 Armor',
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1,
          },
        },
      },
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 1135,
          display: {
            display_string: '+1,135 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'AGILITY',
            name: 'Agility',
          },
          value: 1135,
          is_negated: true,
          display: {
            display_string: '+1,135 Agility',
            color: {
              r: 128,
              g: 128,
              b: 128,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 2812,
          display: {
            display_string: '+2,812 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
      ],
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 480,
        display_string: 'Item Level 480',
      },
      transmog: {
        item: {
          key: {
            href:
              'https://us.api.blizzard.com/data/wow/item/134112?namespace=static-8.3.0_32861-us',
          },
          name: 'Hidden Shoulder',
          id: 134112,
        },
        display_string: 'Transmogrified to:\nHidden Shoulder',
        item_modified_appearance_id: 77343,
      },
      durability: {
        value: 100,
        display_string: 'Durability 100 / 100',
      },
      name_description: {
        display_string: 'Mythic 10',
        color: {
          r: 0,
          g: 255,
          b: 0,
          a: 1,
        },
      },
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/151116?namespace=static-8.3.0_32861-us',
        },
        id: 151116,
      },
      slot: {
        type: 'SHIRT',
        name: 'Shirt',
      },
      quantity: 1,
      context: 14,
      quality: {
        type: 'RARE',
        name: 'Rare',
      },
      name: 'Fashionable Undershirt',
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/151116?namespace=static-8.3.0_32861-us',
        },
        id: 151116,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-8.3.0_32861-us',
        },
        name: 'Miscellaneous',
        id: 0,
      },
      inventory_type: {
        type: 'BODY',
        name: 'Shirt',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      spells: [
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/245686?namespace=static-8.3.0_32861-us',
            },
            name: 'Fashionable!',
            id: 245686,
          },
          description: 'Equip: Proclaim your fashion sense to the world.',
        },
      ],
      level: {
        value: 1,
        display_string: 'Item Level 1',
      },
      transmog: {
        item: {
          key: {
            href: 'https://us.api.blizzard.com/data/wow/item/6795?namespace=static-8.3.0_32861-us',
          },
          name: "White Swashbuckler's Shirt",
          id: 6795,
        },
        display_string: "Transmogrified to:\nWhite Swashbuckler's Shirt",
        item_modified_appearance_id: 2619,
      },
      is_subclass_hidden: true,
      name_description: {
        display_string: 'Trial of Style Season 1',
        color: {
          r: 0,
          g: 255,
          b: 0,
          a: 1,
        },
      },
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/159330?namespace=static-8.3.0_32861-us',
        },
        id: 159330,
      },
      slot: {
        type: 'CHEST',
        name: 'Chest',
      },
      quantity: 1,
      context: 35,
      bonus_list: [5448, 1647, 4786, 6510],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: 'Gore-Splattered Vest',
      modified_appearance_id: 95726,
      azerite_details: {
        selected_powers: [
          {
            id: 13,
            tier: 0,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/263978?namespace=static-8.3.0_32861-us',
                },
                name: 'Azerite Empowered',
                id: 263978,
              },
              description:
                'Increases Item Level by 5 and increases the potency of all Azerite powers granted by this item.',
              cast_time: 'Passive',
            },
            is_display_hidden: true,
          },
          {
            id: 83,
            tier: 1,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/268437?namespace=static-8.3.0_32861-us',
                },
                name: 'Impassive Visage',
                id: 268437,
              },
              description:
                'When you take damage, heal for 14,833. Cannot occur more than once every 6 sec.',
              cast_time: 'Passive',
            },
          },
          {
            id: 38,
            tier: 2,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/267879?namespace=static-8.3.0_32861-us',
                },
                name: 'On My Way',
                id: 267879,
              },
              description: 'Increases your Versatility by 120 and your Speed by 60.',
              cast_time: 'Passive',
            },
          },
          {
            id: 386,
            tier: 3,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/279875?namespace=static-8.3.0_32861-us',
                },
                name: 'Font of Life',
                id: 279875,
              },
              description:
                "Your Essence Font's initial heal is increased by 1,104 and has a chance to reduce the cooldown of Thunder Focus Tea by 1 sec.",
              cast_time: 'Passive',
            },
          },
          {
            id: 76,
            tier: 4,
            spell_tooltip: {
              spell: {
                key: {
                  href:
                    'https://us.api.blizzard.com/data/wow/spell/287829?namespace=static-8.3.0_32861-us',
                },
                name: 'Secret Infusion',
                id: 287829,
              },
              description:
                'After using Thunder Focus Tea, your next spell gives 906 of a stat for 10 sec:\r\nEnveloping Mist: Critical strike\r\nRenewing Mist: Haste\r\nVivify: Mastery\r\nRising Sun Kick: Versatility',
              cast_time: 'Passive',
            },
          },
        ],
        selected_powers_string: 'Fully Upgraded',
      },
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/159330?namespace=static-8.3.0_32861-us',
        },
        id: 159330,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/2?namespace=static-8.3.0_32861-us',
        },
        name: 'Leather',
        id: 2,
      },
      inventory_type: {
        type: 'CHEST',
        name: 'Chest',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      armor: {
        value: 635,
        display: {
          display_string: '635 Armor',
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1,
          },
        },
      },
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 1514,
          display: {
            display_string: '+1,514 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'AGILITY',
            name: 'Agility',
          },
          value: 1514,
          is_negated: true,
          display: {
            display_string: '+1,514 Agility',
            color: {
              r: 128,
              g: 128,
              b: 128,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 3750,
          display: {
            display_string: '+3,750 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
      ],
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 480,
        display_string: 'Item Level 480',
      },
      transmog: {
        item: {
          key: {
            href:
              'https://us.api.blizzard.com/data/wow/item/168659?namespace=static-8.3.0_32861-us',
          },
          name: 'Hidden Chestpiece',
          id: 168659,
        },
        display_string: 'Transmogrified to:\nHidden Chestpiece',
        item_modified_appearance_id: 104602,
      },
      durability: {
        value: 165,
        display_string: 'Durability 165 / 165',
      },
      name_description: {
        display_string: 'Mythic 10',
        color: {
          r: 0,
          g: 255,
          b: 0,
          a: 1,
        },
      },
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/159333?namespace=static-8.3.0_32861-us',
        },
        id: 159333,
      },
      enchantments: [
        {
          display_string: 'Nitro Boosts',
          source_item: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/item/41118?namespace=static-8.3.0_32861-us',
            },
            name: 'Nitro Boosts',
            id: 41118,
          },
          enchantment_id: 4223,
          enchantment_slot: {
            id: 7,
            type: 'ON_USE_SPELL',
          },
          spell: {
            spell: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/spell/55004?namespace=static-8.3.0_32861-us',
              },
              name: 'Nitro Boosts',
              id: 55004,
            },
            description: 'Use: Increase your speed for a few seconds. (2 Min Cooldown)',
          },
        },
      ],
      slot: {
        type: 'WAIST',
        name: 'Waist',
      },
      quantity: 1,
      context: 35,
      bonus_list: [6536, 6578, 6513, 1647, 4786, 6516],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: 'Cincture of the Azerite Arsenal',
      modified_appearance_id: 98474,
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/159333?namespace=static-8.3.0_32861-us',
        },
        id: 159333,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/2?namespace=static-8.3.0_32861-us',
        },
        name: 'Leather',
        id: 2,
      },
      inventory_type: {
        type: 'WAIST',
        name: 'Waist',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      armor: {
        value: 343,
        display: {
          display_string: '343 Armor',
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1,
          },
        },
      },
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 570,
          display: {
            display_string: '+570 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'AGILITY',
            name: 'Agility',
          },
          value: 570,
          is_negated: true,
          display: {
            display_string: '+570 Agility',
            color: {
              r: 128,
              g: 128,
              b: 128,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 1089,
          display: {
            display_string: '+1,089 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CRIT_RATING',
            name: 'Critical Strike',
          },
          value: 104,
          is_equip_bonus: true,
          display: {
            display_string: '+104 Critical Strike',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'VERSATILITY',
            name: 'Versatility',
          },
          value: 147,
          is_equip_bonus: true,
          display: {
            display_string: '+147 Versatility',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
      ],
      sell_price: {
        value: 402079,
        display_strings: {
          header: 'Sell Price:',
          gold: '40',
          silver: '20',
          copper: '79',
        },
      },
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 475,
        display_string: 'Item Level 475',
      },
      transmog: {
        item: {
          key: {
            href: 'https://us.api.blizzard.com/data/wow/item/80736?namespace=static-8.3.0_32861-us',
          },
          name: 'Deepwoods Belt',
          id: 80736,
        },
        display_string: 'Transmogrified to:\nDeepwoods Belt',
        item_modified_appearance_id: 40641,
      },
      durability: {
        value: 55,
        display_string: 'Durability 55 / 55',
      },
      name_description: {
        display_string: 'Mythic 15',
        color: {
          r: 0,
          g: 255,
          b: 0,
          a: 1,
        },
      },
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/159297?namespace=static-8.3.0_32861-us',
        },
        id: 159297,
      },
      slot: {
        type: 'LEGS',
        name: 'Legs',
      },
      quantity: 1,
      context: 35,
      bonus_list: [6536, 6578, 6579, 6562, 6515, 1647, 4786],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: 'Silver-Trimmed Breeches',
      modified_appearance_id: 98449,
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/159297?namespace=static-8.3.0_32861-us',
        },
        id: 159297,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/2?namespace=static-8.3.0_32861-us',
        },
        name: 'Leather',
        id: 2,
      },
      inventory_type: {
        type: 'LEGS',
        name: 'Legs',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      armor: {
        value: 534,
        display: {
          display_string: '534 Armor',
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1,
          },
        },
      },
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 760,
          display: {
            display_string: '+760 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'AGILITY',
            name: 'Agility',
          },
          value: 760,
          is_negated: true,
          display: {
            display_string: '+760 Agility',
            color: {
              r: 128,
              g: 128,
              b: 128,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 1452,
          display: {
            display_string: '+1,452 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'HASTE_RATING',
            name: 'Haste',
          },
          value: 110,
          is_equip_bonus: true,
          display: {
            display_string: '+110 Haste',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'MASTERY_RATING',
            name: 'Mastery',
          },
          value: 225,
          is_equip_bonus: true,
          display: {
            display_string: '+225 Mastery',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CORRUPTION',
            name: 'Corruption',
          },
          value: 35,
          is_equip_bonus: true,
          display: {
            display_string: '+35 Corruption',
            color: {
              r: 149,
              g: 109,
              b: 209,
              a: 1,
            },
          },
        },
      ],
      spells: [
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/318497?namespace=static-8.3.0_32861-us',
            },
            name: 'Deadly Momentum',
            id: 318497,
          },
          description:
            'Equip: Your critical hits have a chance to increase your Critical Strike by 72 for 30 sec, stacking up to 5 times.',
          display_color: {
            r: 149,
            g: 109,
            b: 209,
            a: 1,
          },
        },
      ],
      sell_price: {
        value: 811483,
        display_strings: {
          header: 'Sell Price:',
          gold: '81',
          silver: '14',
          copper: '83',
        },
      },
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 475,
        display_string: 'Item Level 475',
      },
      transmog: {
        item: {
          key: {
            href:
              'https://us.api.blizzard.com/data/wow/item/126388?namespace=static-8.3.0_32861-us',
          },
          name: "Warmongering Gladiator's Ironskin Legguards",
          id: 126388,
        },
        display_string: "Transmogrified to:\nWarmongering Gladiator's Ironskin Legguards",
        item_modified_appearance_id: 71787,
      },
      durability: {
        value: 120,
        display_string: 'Durability 120 / 120',
      },
      name_description: {
        display_string: 'Mythic 15',
        color: {
          r: 0,
          g: 255,
          b: 0,
          a: 1,
        },
      },
      is_corrupted: true,
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/173496?namespace=static-8.3.0_32861-us',
        },
        id: 173496,
      },
      slot: {
        type: 'FEET',
        name: 'Feet',
      },
      quantity: 1,
      context: 54,
      bonus_list: [6412, 6515, 6578, 6579, 6482, 6470, 1522, 4786],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: 'Footwraps of the Insatiable Maw',
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/173496?namespace=static-8.3.0_32861-us',
        },
        id: 173496,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/2?namespace=static-8.3.0_32861-us',
        },
        name: 'Leather',
        id: 2,
      },
      inventory_type: {
        type: 'FEET',
        name: 'Feet',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      armor: {
        value: 387,
        display: {
          display_string: '387 Armor',
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1,
          },
        },
      },
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 519,
          display: {
            display_string: '+519 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'AGILITY',
            name: 'Agility',
          },
          value: 519,
          is_negated: true,
          display: {
            display_string: '+519 Agility',
            color: {
              r: 128,
              g: 128,
              b: 128,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 979,
          display: {
            display_string: '+979 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CRIT_RATING',
            name: 'Critical Strike',
          },
          value: 117,
          is_equip_bonus: true,
          display: {
            display_string: '+117 Critical Strike',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'HASTE_RATING',
            name: 'Haste',
          },
          value: 127,
          is_equip_bonus: true,
          display: {
            display_string: '+127 Haste',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CORRUPTION',
            name: 'Corruption',
          },
          value: 20,
          is_equip_bonus: true,
          display: {
            display_string: '+20 Corruption',
            color: {
              r: 149,
              g: 109,
              b: 209,
              a: 1,
            },
          },
        },
      ],
      spells: [
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/315558?namespace=static-8.3.0_32861-us',
            },
            name: 'Severe',
            id: 315558,
          },
          description:
            'Equip: Increases the amount of Critical Strike you gain from all sources by 12%.',
          display_color: {
            r: 149,
            g: 109,
            b: 209,
            a: 1,
          },
        },
      ],
      sell_price: {
        value: 592477,
        display_strings: {
          header: 'Sell Price:',
          gold: '59',
          silver: '24',
          copper: '77',
        },
      },
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 465,
        display_string: 'Item Level 465',
      },
      transmog: {
        item: {
          key: {
            href:
              'https://us.api.blizzard.com/data/wow/item/168664?namespace=static-8.3.0_32861-us',
          },
          name: 'Hidden Boots',
          id: 168664,
        },
        display_string: 'Transmogrified to:\nHidden Boots',
        item_modified_appearance_id: 104603,
      },
      durability: {
        value: 80,
        display_string: 'Durability 80 / 80',
      },
      is_corrupted: true,
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/174138?namespace=static-8.3.0_32861-us',
        },
        id: 174138,
      },
      slot: {
        type: 'WRIST',
        name: 'Wrist',
      },
      quantity: 1,
      context: 6,
      bonus_list: [4824, 6516, 6515, 1517, 4786],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: 'Bracers of Dark Prophecy',
      modified_appearance_id: 108143,
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/174138?namespace=static-8.3.0_32861-us',
        },
        id: 174138,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/2?namespace=static-8.3.0_32861-us',
        },
        name: 'Leather',
        id: 2,
      },
      inventory_type: {
        type: 'WRIST',
        name: 'Wrist',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      armor: {
        value: 267,
        display: {
          display_string: '267 Armor',
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1,
          },
        },
      },
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 428,
          display: {
            display_string: '+428 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'AGILITY',
            name: 'Agility',
          },
          value: 428,
          is_negated: true,
          display: {
            display_string: '+428 Agility',
            color: {
              r: 128,
              g: 128,
              b: 128,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 816,
          display: {
            display_string: '+816 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CRIT_RATING',
            name: 'Critical Strike',
          },
          value: 98,
          is_equip_bonus: true,
          display: {
            display_string: '+98 Critical Strike',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'HASTE_RATING',
            name: 'Haste',
          },
          value: 90,
          is_equip_bonus: true,
          display: {
            display_string: '+90 Haste',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
      ],
      sell_price: {
        value: 407337,
        display_strings: {
          header: 'Sell Price:',
          gold: '40',
          silver: '73',
          copper: '37',
        },
      },
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 475,
        display_string: 'Item Level 475',
      },
      transmog: {
        item: {
          key: {
            href:
              'https://us.api.blizzard.com/data/wow/item/168665?namespace=static-8.3.0_32861-us',
          },
          name: 'Hidden Bracers',
          id: 168665,
        },
        display_string: 'Transmogrified to:\nHidden Bracers',
        item_modified_appearance_id: 104604,
      },
      durability: {
        value: 55,
        display_string: 'Durability 55 / 55',
      },
      name_description: {
        display_string: 'Mythic',
        color: {
          r: 0,
          g: 255,
          b: 0,
          a: 1,
        },
      },
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/173464?namespace=static-8.3.0_32861-us',
        },
        id: 173464,
      },
      slot: {
        type: 'HANDS',
        name: 'Hands',
      },
      quantity: 1,
      context: 55,
      bonus_list: [6412, 41, 6513, 6516, 1527, 4786],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: 'Gloves of the Insatiable Maw',
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/173464?namespace=static-8.3.0_32861-us',
        },
        id: 173464,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/2?namespace=static-8.3.0_32861-us',
        },
        name: 'Leather',
        id: 2,
      },
      inventory_type: {
        type: 'HAND',
        name: 'Hands',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      armor: {
        value: 366,
        display: {
          display_string: '366 Armor',
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1,
          },
        },
      },
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 544,
          display: {
            display_string: '+544 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'AGILITY',
            name: 'Agility',
          },
          value: 544,
          is_negated: true,
          display: {
            display_string: '+544 Agility',
            color: {
              r: 128,
              g: 128,
              b: 128,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 1032,
          display: {
            display_string: '+1,032 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CRIT_RATING',
            name: 'Critical Strike',
          },
          value: 118,
          is_equip_bonus: true,
          display: {
            display_string: '+118 Critical Strike',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'VERSATILITY',
            name: 'Versatility',
          },
          value: 129,
          is_equip_bonus: true,
          display: {
            display_string: '+129 Versatility',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'COMBAT_RATING_LIFESTEAL',
            name: 'Leech',
          },
          value: 106,
          is_equip_bonus: true,
          display: {
            display_string: '+106 Leech',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
      ],
      sell_price: {
        value: 411529,
        display_strings: {
          header: 'Sell Price:',
          gold: '41',
          silver: '15',
          copper: '29',
        },
      },
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 470,
        display_string: 'Item Level 470',
      },
      transmog: {
        item: {
          key: {
            href:
              'https://us.api.blizzard.com/data/wow/item/158329?namespace=static-8.3.0_32861-us',
          },
          name: 'Hidden Gloves',
          id: 158329,
        },
        display_string: 'Transmogrified to:\nHidden Gloves',
        item_modified_appearance_id: 94331,
      },
      durability: {
        value: 55,
        display_string: 'Durability 55 / 55',
      },
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/158362?namespace=static-8.3.0_32861-us',
        },
        id: 158362,
      },
      enchantments: [
        {
          display_string: 'Enchanted: +60 Critical Strike',
          source_item: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/item/168446?namespace=static-8.3.0_32861-us',
            },
            name: 'Enchant Ring - Accord of Critical Strike',
            id: 168446,
          },
          enchantment_id: 6108,
          enchantment_slot: {
            id: 0,
            type: 'PERMANENT',
          },
        },
      ],
      slot: {
        type: 'FINGER_1',
        name: 'Ring 1',
      },
      quantity: 1,
      context: 16,
      bonus_list: [6536, 6515, 1637, 4786, 6482, 6470],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: "Lord Waycrest's Signet",
      modified_appearance_id: 0,
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/158362?namespace=static-8.3.0_32861-us',
        },
        id: 158362,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-8.3.0_32861-us',
        },
        name: 'Miscellaneous',
        id: 0,
      },
      inventory_type: {
        type: 'FINGER',
        name: 'Finger',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      unique_equipped: 'Unique-Equipped',
      stats: [
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 735,
          display: {
            display_string: '+735 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CRIT_RATING',
            name: 'Critical Strike',
          },
          value: 369,
          is_equip_bonus: true,
          display: {
            display_string: '+369 Critical Strike',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'VERSATILITY',
            name: 'Versatility',
          },
          value: 205,
          is_equip_bonus: true,
          display: {
            display_string: '+205 Versatility',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CORRUPTION',
            name: 'Corruption',
          },
          value: 20,
          is_equip_bonus: true,
          display: {
            display_string: '+20 Corruption',
            color: {
              r: 149,
              g: 109,
              b: 209,
              a: 1,
            },
          },
        },
      ],
      spells: [
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/315558?namespace=static-8.3.0_32861-us',
            },
            name: 'Severe',
            id: 315558,
          },
          description:
            'Equip: Increases the amount of Critical Strike you gain from all sources by 12%.',
          display_color: {
            r: 149,
            g: 109,
            b: 209,
            a: 1,
          },
        },
      ],
      sell_price: {
        value: 509242,
        display_strings: {
          header: 'Sell Price:',
          gold: '50',
          silver: '92',
          copper: '42',
        },
      },
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      set: {
        item_set: {
          key: {
            href:
              'https://us.api.blizzard.com/data/wow/item-set/1439?namespace=static-8.3.0_32861-us',
          },
          name: 'Waycrest Legacy',
          id: 1439,
        },
        items: [
          {
            item: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/item/158362?namespace=static-8.3.0_32861-us',
              },
              name: "Lord Waycrest's Signet",
              id: 158362,
            },
            is_equipped: true,
          },
          {
            item: {
              key: {
                href:
                  'https://us.api.blizzard.com/data/wow/item/159631?namespace=static-8.3.0_32861-us',
              },
              name: "Lady Waycrest's Music Box",
              id: 159631,
            },
          },
        ],
        effects: [
          {
            display_string:
              '(2) Set: When you trigger a Cacaphonous Chord or Harmonious Chord there is a 40% chance to trigger the other chord at 60% of the power.',
            required_count: 2,
          },
        ],
        display_string: 'Waycrest Legacy (1/2)',
      },
      level: {
        value: 465,
        display_string: 'Item Level 465',
      },
      is_subclass_hidden: true,
      name_description: {
        display_string: 'Mythic 15',
        color: {
          r: 0,
          g: 255,
          b: 0,
          a: 1,
        },
      },
      is_corrupted: true,
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/158318?namespace=static-8.3.0_32861-us',
        },
        id: 158318,
      },
      enchantments: [
        {
          display_string: 'Enchanted: +60 Critical Strike',
          source_item: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/item/168446?namespace=static-8.3.0_32861-us',
            },
            name: 'Enchant Ring - Accord of Critical Strike',
            id: 168446,
          },
          enchantment_id: 6108,
          enchantment_slot: {
            id: 0,
            type: 'PERMANENT',
          },
        },
      ],
      slot: {
        type: 'FINGER_2',
        name: 'Ring 2',
      },
      quantity: 1,
      context: 35,
      bonus_list: [6536, 40, 6578, 6579, 6562, 6513, 1647, 4786],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: 'Murky Cerulean Signet',
      modified_appearance_id: 0,
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/158318?namespace=static-8.3.0_32861-us',
        },
        id: 158318,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-8.3.0_32861-us',
        },
        name: 'Miscellaneous',
        id: 0,
      },
      inventory_type: {
        type: 'FINGER',
        name: 'Finger',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      unique_equipped: 'Unique-Equipped',
      stats: [
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 816,
          display: {
            display_string: '+816 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CRIT_RATING',
            name: 'Critical Strike',
          },
          value: 422,
          is_equip_bonus: true,
          display: {
            display_string: '+422 Critical Strike',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'MASTERY_RATING',
            name: 'Mastery',
          },
          value: 169,
          is_equip_bonus: true,
          display: {
            display_string: '+169 Mastery',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'COMBAT_RATING_AVOIDANCE',
            name: 'Avoidance',
          },
          value: 101,
          is_equip_bonus: true,
          display: {
            display_string: '+101 Avoidance',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CORRUPTION',
            name: 'Corruption',
          },
          value: 35,
          is_equip_bonus: true,
          display: {
            display_string: '+35 Corruption',
            color: {
              r: 149,
              g: 109,
              b: 209,
              a: 1,
            },
          },
        },
      ],
      spells: [
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/318497?namespace=static-8.3.0_32861-us',
            },
            name: 'Deadly Momentum',
            id: 318497,
          },
          description:
            'Equip: Your critical hits have a chance to increase your Critical Strike by 72 for 30 sec, stacking up to 5 times.',
          display_color: {
            r: 149,
            g: 109,
            b: 209,
            a: 1,
          },
        },
      ],
      sell_price: {
        value: 506262,
        display_strings: {
          header: 'Sell Price:',
          gold: '50',
          silver: '62',
          copper: '62',
        },
      },
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 475,
        display_string: 'Item Level 475',
      },
      is_subclass_hidden: true,
      name_description: {
        display_string: 'Mythic 15',
        color: {
          r: 0,
          g: 255,
          b: 0,
          a: 1,
        },
      },
      is_corrupted: true,
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/173944?namespace=static-8.3.0_32861-us',
        },
        id: 173944,
      },
      sockets: [
        {
          socket_type: {
            type: 'PRISMATIC',
            name: 'Prismatic Socket',
          },
          item: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/item/168639?namespace=static-8.3.0_32861-us',
            },
            name: 'Deadly Lava Lazuli',
            id: 168639,
          },
          display_string: '+50 Critical Strike',
          media: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/media/item/168639?namespace=static-8.3.0_32861-us',
            },
            id: 168639,
          },
        },
      ],
      slot: {
        type: 'TRINKET_1',
        name: 'Trinket 1',
      },
      quantity: 1,
      context: 6,
      bonus_list: [4824, 1517, 4786, 6514],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: 'Forbidden Obsidian Claw',
      modified_appearance_id: 0,
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/173944?namespace=static-8.3.0_32861-us',
        },
        id: 173944,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-8.3.0_32861-us',
        },
        name: 'Miscellaneous',
        id: 0,
      },
      inventory_type: {
        type: 'TRINKET',
        name: 'Trinket',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      unique_equipped: 'Unique-Equipped',
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 723,
          display: {
            display_string: '+723 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
      ],
      spells: [
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/313148?namespace=static-8.3.0_32861-us',
            },
            name: 'Obsidian Claw',
            id: 313148,
          },
          description:
            "Use: Drain the target's life force, inflicting 98,271 Shadow damage to the enemy and restoring 13,419 mana to yourself over 8.5 sec. (2 Min Cooldown)",
        },
      ],
      sell_price: {
        value: 674006,
        display_strings: {
          header: 'Sell Price:',
          gold: '67',
          silver: '40',
          copper: '6',
        },
      },
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 475,
        display_string: 'Item Level 475',
      },
      is_subclass_hidden: true,
      name_description: {
        display_string: 'Mythic',
        color: {
          r: 0,
          g: 255,
          b: 0,
          a: 1,
        },
      },
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/171085?namespace=static-8.3.0_32861-us',
        },
        id: 171085,
      },
      sockets: [
        {
          socket_type: {
            type: 'PRISMATIC',
            name: 'Prismatic Socket',
          },
          item: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/item/168638?namespace=static-8.3.0_32861-us',
            },
            name: "Leviathan's Eye of Intellect",
            id: 168638,
          },
          display_string: '+120 Intellect',
          media: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/media/item/168638?namespace=static-8.3.0_32861-us',
            },
            id: 168638,
          },
        },
      ],
      slot: {
        type: 'TRINKET_2',
        name: 'Trinket 2',
      },
      quantity: 1,
      context: 13,
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: 'Peerless Alchemist Stone',
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/171085?namespace=static-8.3.0_32861-us',
        },
        id: 171085,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-8.3.0_32861-us',
        },
        name: 'Miscellaneous',
        id: 0,
      },
      inventory_type: {
        type: 'TRINKET',
        name: 'Trinket',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      unique_equipped: 'Unique-Equipped',
      limit_category: 'Unique-Equipped: Alchemist Stone (1)',
      stats: [
        {
          type: {
            type: 'VERSATILITY',
            name: 'Versatility',
          },
          value: 236,
          is_equip_bonus: true,
          display: {
            display_string: '+236 Versatility',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
      ],
      spells: [
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/188026?namespace=static-8.3.0_32861-us',
            },
            name: 'Infernal Alchemist Stone',
            id: 188026,
          },
          description:
            'Equip: When you heal or deal damage you have a chance to increase your Strength, Agility, or Intellect by 4,109 for 15 sec.  Your highest stat is always chosen.',
        },
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/17619?namespace=static-8.3.0_32861-us',
            },
            name: 'Alchemist Stone',
            id: 17619,
          },
          description:
            'Equip: Increases the effect that healing and mana potions have on the wearer by 40%.  This effect does not stack.',
        },
      ],
      sell_price: {
        value: 668360,
        display_strings: {
          header: 'Sell Price:',
          gold: '66',
          silver: '83',
          copper: '60',
        },
      },
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
        skill: {
          profession: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/profession/2478?namespace=static-8.3.0_32861-us',
            },
            name: 'Kul Tiran Alchemy',
            id: 2478,
          },
          level: 175,
          display_string: 'Requires Kul Tiran Alchemy (175)',
        },
      },
      description: "Can be used for transmutations in place of a Philosopher's Stone.",
      level: {
        value: 470,
        display_string: 'Item Level 470',
      },
      is_subclass_hidden: true,
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/169223?namespace=static-8.3.0_32861-us',
        },
        id: 169223,
      },
      slot: {
        type: 'BACK',
        name: 'Back',
      },
      quantity: 1,
      context: 11,
      bonus_list: [6594, 1472],
      quality: {
        type: 'LEGENDARY',
        name: 'Legendary',
      },
      name: "Ashjra'kamas, Shroud of Resolve",
      modified_appearance_id: 105940,
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/169223?namespace=static-8.3.0_32861-us',
        },
        id: 169223,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/1?namespace=static-8.3.0_32861-us',
        },
        name: 'Cloth',
        id: 1,
      },
      inventory_type: {
        type: 'CLOAK',
        name: 'Back',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      armor: {
        value: 221,
        display: {
          display_string: '221 Armor',
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1,
          },
        },
      },
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 540,
          display: {
            display_string: '+540 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'AGILITY',
            name: 'Agility',
          },
          value: 540,
          is_negated: true,
          display: {
            display_string: '+540 Agility',
            color: {
              r: 128,
              g: 128,
              b: 128,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STRENGTH',
            name: 'Strength',
          },
          value: 540,
          is_negated: true,
          display: {
            display_string: '+540 Strength',
            color: {
              r: 128,
              g: 128,
              b: 128,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 1067,
          display: {
            display_string: '+1,067 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CRIT_RATING',
            name: 'Critical Strike',
          },
          value: 72,
          is_equip_bonus: true,
          display: {
            display_string: '+72 Critical Strike',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'HASTE_RATING',
            name: 'Haste',
          },
          value: 72,
          is_equip_bonus: true,
          display: {
            display_string: '+72 Haste',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'MASTERY_RATING',
            name: 'Mastery',
          },
          value: 72,
          is_equip_bonus: true,
          display: {
            display_string: '+72 Mastery',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CORRUPTION_RESISTANCE',
            name: 'Corruption Resistance',
          },
          value: 98,
          is_equip_bonus: true,
          display: {
            display_string: '+98 Corruption Resistance',
            color: {
              r: 255,
              g: 210,
              b: 0,
              a: 1,
            },
          },
        },
      ],
      spells: [
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/317419?namespace=static-8.3.0_32861-us',
            },
            name: 'Shroud of Resolve',
            id: 317419,
          },
          description: "Equip: Reduce Sanity loss within the Visions of N'Zoth by 80%.",
        },
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/317860?namespace=static-8.3.0_32861-us',
            },
            name: 'Draconic Empowerment',
            id: 317860,
          },
          description:
            'Equip: Your spells and abilities have a chance to increase your Intellect by 3,386 for 15 sec.',
        },
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/318378?namespace=static-8.3.0_32861-us',
            },
            name: 'Steadfast Resolve',
            id: 318378,
          },
          description:
            "Use: Dispel any effects of N'Zoth's Corruption, and become immune to any further Corruption effects for 6 sec. (3 Min Cooldown)",
        },
      ],
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 500,
        display_string: 'Item Level 500',
      },
      transmog: {
        item: {
          key: {
            href:
              'https://us.api.blizzard.com/data/wow/item/134111?namespace=static-8.3.0_32861-us',
          },
          name: 'Hidden Cloak',
          id: 134111,
        },
        display_string: 'Transmogrified to:\nHidden Cloak',
        item_modified_appearance_id: 77345,
      },
      is_subclass_hidden: true,
      name_description: {
        display_string: 'Rank 15',
        color: {
          r: 0,
          g: 255,
          b: 255,
          a: 1,
        },
      },
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/172198?namespace=static-8.3.0_32861-us',
        },
        id: 172198,
      },
      enchantments: [
        {
          display_string: "Enchanted: Machinist's Brilliance",
          source_item: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/item/168593?namespace=static-8.3.0_32861-us',
            },
            name: "Enchant Weapon - Machinist's Brilliance",
            id: 168593,
          },
          enchantment_id: 6112,
          enchantment_slot: {
            id: 0,
            type: 'PERMANENT',
          },
        },
      ],
      sockets: [
        {
          socket_type: {
            type: 'PRISMATIC',
            name: 'Prismatic Socket',
          },
          item: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/item/168639?namespace=static-8.3.0_32861-us',
            },
            name: 'Deadly Lava Lazuli',
            id: 168639,
          },
          display_string: '+50 Critical Strike',
          media: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/media/item/168639?namespace=static-8.3.0_32861-us',
            },
            id: 168639,
          },
        },
      ],
      slot: {
        type: 'MAIN_HAND',
        name: 'Main Hand',
      },
      quantity: 1,
      context: 6,
      bonus_list: [4824, 6570, 6578, 6579, 1517, 4786, 6514],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: "Mar'kowa, the Mindpiercer",
      modified_appearance_id: 108364,
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/172198?namespace=static-8.3.0_32861-us',
        },
        id: 172198,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/2?namespace=static-8.3.0_32861-us',
        },
        name: 'Weapon',
        id: 2,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/2/item-subclass/0?namespace=static-8.3.0_32861-us',
        },
        name: 'Axe',
        id: 0,
      },
      inventory_type: {
        type: 'WEAPON',
        name: 'One-Hand',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      weapon: {
        damage: {
          min_value: 364,
          max_value: 758,
          display_string: '364 - 758 Damage',
          damage_class: {
            type: 'PHYSICAL',
            name: 'Physical',
          },
        },
        attack_speed: {
          value: 2600,
          display_string: 'Speed 2.60',
        },
        dps: {
          value: 215.76923,
          display_string: '(215.8 damage per second)',
        },
      },
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 2214,
          display: {
            display_string: '+2,214 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 726,
          display: {
            display_string: '+726 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CRIT_RATING',
            name: 'Critical Strike',
          },
          value: 98,
          is_equip_bonus: true,
          display: {
            display_string: '+98 Critical Strike',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'VERSATILITY',
            name: 'Versatility',
          },
          value: 69,
          is_equip_bonus: true,
          display: {
            display_string: '+69 Versatility',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CORRUPTION',
            name: 'Corruption',
          },
          value: 20,
          is_equip_bonus: true,
          display: {
            display_string: '+20 Corruption',
            color: {
              r: 149,
              g: 109,
              b: 209,
              a: 1,
            },
          },
        },
      ],
      spells: [
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/318299?namespace=static-8.3.0_32861-us',
            },
            name: 'Flash of Insight',
            id: 318299,
          },
          description:
            "Equip: Your mind's true potential is unlocked, causing your spells to grant you flashes of insight. Gain between 1% and 8% Intellect at all times.",
          display_color: {
            r: 149,
            g: 109,
            b: 209,
            a: 1,
          },
        },
      ],
      sell_price: {
        value: 1131326,
        display_strings: {
          header: 'Sell Price:',
          gold: '113',
          silver: '13',
          copper: '26',
        },
      },
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 475,
        display_string: 'Item Level 475',
      },
      transmog: {
        item: {
          key: {
            href:
              'https://us.api.blizzard.com/data/wow/item/128937?namespace=static-8.3.0_32861-us',
          },
          name: 'Sheilun, Staff of the Mists',
          id: 128937,
        },
        display_string: 'Transmogrified to:\nSheilun, Staff of the Mists',
        item_modified_appearance_id: 80679,
      },
      durability: {
        value: 110,
        display_string: 'Durability 110 / 110',
      },
      name_description: {
        display_string: 'Mythic',
        color: {
          r: 0,
          g: 255,
          b: 0,
          a: 1,
        },
      },
      is_corrupted: true,
    },
    {
      item: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item/159668?namespace=static-8.3.0_32861-us',
        },
        id: 159668,
      },
      slot: {
        type: 'OFF_HAND',
        name: 'Off Hand',
      },
      quantity: 1,
      context: 35,
      bonus_list: [6536, 6578, 6513, 1647, 4786, 6480, 6455],
      quality: {
        type: 'EPIC',
        name: 'Epic',
      },
      name: 'Rattling Jar of Eyes',
      modified_appearance_id: 96309,
      media: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/media/item/159668?namespace=static-8.3.0_32861-us',
        },
        id: 159668,
      },
      item_class: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-8.3.0_32861-us',
        },
        name: 'Armor',
        id: 4,
      },
      item_subclass: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-8.3.0_32861-us',
        },
        name: 'Miscellaneous',
        id: 0,
      },
      inventory_type: {
        type: 'HOLDABLE',
        name: 'Held In Off-hand',
      },
      binding: {
        type: 'ON_ACQUIRE',
        name: 'Binds when picked up',
      },
      stats: [
        {
          type: {
            type: 'INTELLECT',
            name: 'Intellect',
          },
          value: 1166,
          display: {
            display_string: '+1,166 Intellect',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'STAMINA',
            name: 'Stamina',
          },
          value: 726,
          display: {
            display_string: '+726 Stamina',
            color: {
              r: 255,
              g: 255,
              b: 255,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CRIT_RATING',
            name: 'Critical Strike',
          },
          value: 91,
          is_equip_bonus: true,
          display: {
            display_string: '+91 Critical Strike',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'HASTE_RATING',
            name: 'Haste',
          },
          value: 76,
          is_equip_bonus: true,
          display: {
            display_string: '+76 Haste',
            color: {
              r: 0,
              g: 255,
              b: 0,
              a: 1,
            },
          },
        },
        {
          type: {
            type: 'CORRUPTION',
            name: 'Corruption',
          },
          value: 10,
          is_equip_bonus: true,
          display: {
            display_string: '+10 Corruption',
            color: {
              r: 149,
              g: 109,
              b: 209,
              a: 1,
            },
          },
        },
      ],
      spells: [
        {
          spell: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/spell/315554?namespace=static-8.3.0_32861-us',
            },
            name: 'Severe',
            id: 315554,
          },
          description:
            'Equip: Increases the amount of Critical Strike you gain from all sources by 6%.',
          display_color: {
            r: 149,
            g: 109,
            b: 209,
            a: 1,
          },
        },
      ],
      sell_price: {
        value: 675306,
        display_strings: {
          header: 'Sell Price:',
          gold: '67',
          silver: '53',
          copper: '6',
        },
      },
      requirements: {
        level: {
          value: 120,
          display_string: 'Requires Level 120',
        },
      },
      level: {
        value: 475,
        display_string: 'Item Level 475',
      },
      transmog: {
        item: {
          key: {
            href: 'https://us.api.blizzard.com/data/wow/item/60715?namespace=static-8.3.0_32861-us',
          },
          name: 'Vial of Chloroform',
          id: 60715,
        },
        display_string: 'Transmogrified to:\nVial of Chloroform',
        item_modified_appearance_id: 30315,
      },
      is_subclass_hidden: true,
      name_description: {
        display_string: 'Mythic 15',
        color: {
          r: 0,
          g: 255,
          b: 0,
          a: 1,
        },
      },
      is_corrupted: true,
    },
  ],
  equipped_item_sets: [
    {
      item_set: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/item-set/1439?namespace=static-8.3.0_32861-us',
        },
        name: 'Waycrest Legacy',
        id: 1439,
      },
      items: [
        {
          item: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/item/158362?namespace=static-8.3.0_32861-us',
            },
            name: "Lord Waycrest's Signet",
            id: 158362,
          },
          is_equipped: true,
        },
        {
          item: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/item/159631?namespace=static-8.3.0_32861-us',
            },
            name: "Lady Waycrest's Music Box",
            id: 159631,
          },
        },
      ],
      effects: [
        {
          display_string:
            '(2) Set: When you trigger a Cacaphonous Chord or Harmonious Chord there is a 40% chance to trigger the other chord at 60% of the power.',
          required_count: 2,
        },
      ],
      display_string: 'Waycrest Legacy (1/2)',
    },
  ],
})

export default CharacterEquipmentSummaryMock
