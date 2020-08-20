import { CharacterRaids } from '../../src/blizzard/interfaces/profile/character-encounters/character-raids.interface'

const CharacterRaidsMock = (id: number, name: string): CharacterRaids => ({
  _links: {
    self: {
      href:
        'https://us.api.blizzard.com/profile/wow/character/hyjal/tesali/encounters/raids?namespace=profile-us',
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
  expansions: [
    {
      expansion: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/journal-expansion/68?namespace=static-8.3.0_32861-us',
        },
        name: 'Classic',
        id: 68,
      },
      instances: [
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/741?namespace=static-8.3.0_32861-us',
            },
            name: 'Molten Core',
            id: 741,
          },
          modes: [
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1528?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ragnaros',
                      id: 1528,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1416613989000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/742?namespace=static-8.3.0_32861-us',
            },
            name: 'Blackwing Lair',
            id: 742,
          },
          modes: [
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 2,
                total_count: 2,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1529?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Razorgore the Untamed',
                      id: 1529,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1387780910000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1536?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Nefarian',
                      id: 1536,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1485476310000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/744?namespace=static-8.3.0_32861-us',
            },
            name: "Temple of Ahn'Qiraj",
            id: 744,
          },
          modes: [
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1551?namespace=static-8.3.0_32861-us',
                      },
                      name: "C'thun",
                      id: 1551,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1533408535000,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      expansion: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/journal-expansion/70?namespace=static-8.3.0_32861-us',
        },
        name: 'Burning Crusade',
        id: 70,
      },
      instances: [
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/745?namespace=static-8.3.0_32861-us',
            },
            name: 'Karazhan',
            id: 745,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1563?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Prince Malchezaar',
                      id: 1563,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1449397767000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/748?namespace=static-8.3.0_32861-us',
            },
            name: 'Serpentshrine Cavern',
            id: 748,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1572?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lady Vashj',
                      id: 1572,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1543722665000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/749?namespace=static-8.3.0_32861-us',
            },
            name: 'The Eye',
            id: 749,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1576?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kael'thas Sunstrider",
                      id: 1576,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1559603888000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/750?namespace=static-8.3.0_32861-us',
            },
            name: 'The Battle for Mount Hyjal',
            id: 750,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1581?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Archimonde',
                      id: 1581,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1558818646000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/751?namespace=static-8.3.0_32861-us',
            },
            name: 'Black Temple',
            id: 751,
          },
          modes: [
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1590?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Illidan Stormrage',
                      id: 1590,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1558815766000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/752?namespace=static-8.3.0_32861-us',
            },
            name: 'Sunwell Plateau',
            id: 752,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1596?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kil'jaeden",
                      id: 1596,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1559677142000,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      expansion: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/journal-expansion/72?namespace=static-8.3.0_32861-us',
        },
        name: 'Wrath of the Lich King',
        id: 72,
      },
      instances: [
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/753?namespace=static-8.3.0_32861-us',
            },
            name: 'Vault of Archavon',
            id: 753,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 4,
                total_count: 4,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1597?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Archavon the Stone Watcher',
                      id: 1597,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1424502427000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1598?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Emalon the Storm Watcher',
                      id: 1598,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1424502418000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1599?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Koralon the Flame Watcher',
                      id: 1599,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1424502422000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1600?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Toravon the Ice Watcher',
                      id: 1600,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1424502483000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/754?namespace=static-8.3.0_32861-us',
            },
            name: 'Naxxramas',
            id: 754,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 15,
                total_count: 15,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1601?namespace=static-8.3.0_32861-us',
                      },
                      name: "Anub'Rekhan",
                      id: 1601,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1558806149000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1602?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Grand Widow Faerlina',
                      id: 1602,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1558806206000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1603?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Maexxna',
                      id: 1603,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1558806302000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1604?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Noth the Plaguebringer',
                      id: 1604,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470329029000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1605?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Heigan the Unclean',
                      id: 1605,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470329082000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1606?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Loatheb',
                      id: 1606,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470329148000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1607?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Instructor Razuvious',
                      id: 1607,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1471306488000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1608?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Gothik the Harvester',
                      id: 1608,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1471306822000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1609?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Four Horsemen',
                      id: 1609,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1471306927000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1610?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Patchwerk',
                      id: 1610,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1558806356000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1611?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Grobbulus',
                      id: 1611,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1558806410000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1612?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Gluth',
                      id: 1612,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1558806453000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1613?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Thaddius',
                      id: 1613,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1558806579000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1614?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sapphiron',
                      id: 1614,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470330876000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1615?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kel'Thuzad",
                      id: 1615,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470331168000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 15,
                total_count: 15,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1601?namespace=static-8.3.0_32861-us',
                      },
                      name: "Anub'Rekhan",
                      id: 1601,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426449520000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1602?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Grand Widow Faerlina',
                      id: 1602,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426449629000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1603?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Maexxna',
                      id: 1603,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426449742000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1604?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Noth the Plaguebringer',
                      id: 1604,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1426448946000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1605?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Heigan the Unclean',
                      id: 1605,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426449011000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1606?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Loatheb',
                      id: 1606,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426449082000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1607?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Instructor Razuvious',
                      id: 1607,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426449961000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1608?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Gothik the Harvester',
                      id: 1608,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426450315000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1609?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Four Horsemen',
                      id: 1609,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426450438000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1610?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Patchwerk',
                      id: 1610,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426449203000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1611?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Grobbulus',
                      id: 1611,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426449271000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1612?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Gluth',
                      id: 1612,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426449339000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1613?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Thaddius',
                      id: 1613,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426449460000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1614?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sapphiron',
                      id: 1614,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426450503000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1615?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kel'Thuzad",
                      id: 1615,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426451260000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/755?namespace=static-8.3.0_32861-us',
            },
            name: 'The Obsidian Sanctum',
            id: 755,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1616?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sartharion',
                      id: 1616,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1471306127000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1616?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sartharion',
                      id: 1616,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1464227014000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/756?namespace=static-8.3.0_32861-us',
            },
            name: 'The Eye of Eternity',
            id: 756,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1617?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Malygos',
                      id: 1617,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470334804000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1617?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Malygos',
                      id: 1617,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1533605030000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/757?namespace=static-8.3.0_32861-us',
            },
            name: 'Trial of the Crusader',
            id: 757,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 5,
                total_count: 5,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1618?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Northrend Beasts',
                      id: 1618,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470148276000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1619?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lord Jaraxxus',
                      id: 1619,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470148534000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1620?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Champions of the Alliance',
                      id: 1620,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470148639000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1622?namespace=static-8.3.0_32861-us',
                      },
                      name: "Twin Val'kyr",
                      id: 1622,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470148703000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1623?namespace=static-8.3.0_32861-us',
                      },
                      name: "Anub'arak",
                      id: 1623,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470149021000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 5,
                total_count: 5,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1618?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Northrend Beasts',
                      id: 1618,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1464320549000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1619?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lord Jaraxxus',
                      id: 1619,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1464320759000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1620?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Champions of the Alliance',
                      id: 1620,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1464320929000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1622?namespace=static-8.3.0_32861-us',
                      },
                      name: "Twin Val'kyr",
                      id: 1622,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1464321018000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1623?namespace=static-8.3.0_32861-us',
                      },
                      name: "Anub'arak",
                      id: 1623,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1464322213000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN_HEROIC',
                name: '25 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 5,
                total_count: 5,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1618?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Northrend Beasts',
                      id: 1618,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1464320549000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1619?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lord Jaraxxus',
                      id: 1619,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1464320759000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1620?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Champions of the Alliance',
                      id: 1620,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1464320929000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1622?namespace=static-8.3.0_32861-us',
                      },
                      name: "Twin Val'kyr",
                      id: 1622,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1464321018000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1623?namespace=static-8.3.0_32861-us',
                      },
                      name: "Anub'arak",
                      id: 1623,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1464322213000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/758?namespace=static-8.3.0_32861-us',
            },
            name: 'Icecrown Citadel',
            id: 758,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 12,
                total_count: 12,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1624?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lord Marrowgar',
                      id: 1624,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1385840753000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1625?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lady Deathwhisper',
                      id: 1625,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1385840842000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1627?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Icecrown Gunship Battle',
                      id: 1627,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1385841093000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1628?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Deathbringer Saurfang',
                      id: 1628,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1385841245000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1629?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Festergut',
                      id: 1629,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1385841450000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1630?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Rotface',
                      id: 1630,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1385841563000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1631?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Professor Putricide',
                      id: 1631,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1385841703000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1632?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Blood Prince Council',
                      id: 1632,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1385841891000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1633?namespace=static-8.3.0_32861-us',
                      },
                      name: "Blood-Queen Lana'thel",
                      id: 1633,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1385842005000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1634?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Valithria Dreamwalker',
                      id: 1634,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1385842218000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1635?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sindragosa',
                      id: 1635,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1385842560000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1636?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Lich King',
                      id: 1636,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1385842931000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 12,
                total_count: 12,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1624?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lord Marrowgar',
                      id: 1624,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1532225506000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1625?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lady Deathwhisper',
                      id: 1625,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1532225580000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1627?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Icecrown Gunship Battle',
                      id: 1627,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1532225826000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1628?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Deathbringer Saurfang',
                      id: 1628,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1532226058000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1629?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Festergut',
                      id: 1629,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1532226194000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1630?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Rotface',
                      id: 1630,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1532226268000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1631?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Professor Putricide',
                      id: 1631,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1532226376000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1632?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Blood Prince Council',
                      id: 1632,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1532226562000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1633?namespace=static-8.3.0_32861-us',
                      },
                      name: "Blood-Queen Lana'thel",
                      id: 1633,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1532226658000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1634?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Valithria Dreamwalker',
                      id: 1634,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1532226792000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1635?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sindragosa',
                      id: 1635,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1532227045000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1636?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Lich King',
                      id: 1636,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1532227329000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_10_MAN_HEROIC',
                name: '10 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 12,
                total_count: 12,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1624?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lord Marrowgar',
                      id: 1624,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425688717000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1625?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lady Deathwhisper',
                      id: 1625,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425774591000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1627?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Icecrown Gunship Battle',
                      id: 1627,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425774870000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1628?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Deathbringer Saurfang',
                      id: 1628,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425775069000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1629?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Festergut',
                      id: 1629,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425775217000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1630?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Rotface',
                      id: 1630,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425775306000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1631?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Professor Putricide',
                      id: 1631,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425775472000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1632?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Blood Prince Council',
                      id: 1632,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425775625000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1633?namespace=static-8.3.0_32861-us',
                      },
                      name: "Blood-Queen Lana'thel",
                      id: 1633,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425776249000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1634?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Valithria Dreamwalker',
                      id: 1634,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425776449000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1635?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sindragosa',
                      id: 1635,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425776681000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1636?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Lich King',
                      id: 1636,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1425777005000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN_HEROIC',
                name: '25 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 12,
                total_count: 12,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1624?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lord Marrowgar',
                      id: 1624,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1533411235000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1625?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lady Deathwhisper',
                      id: 1625,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1533411290000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1627?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Icecrown Gunship Battle',
                      id: 1627,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1533411432000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1628?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Deathbringer Saurfang',
                      id: 1628,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1533411587000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1629?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Festergut',
                      id: 1629,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1533411716000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1630?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Rotface',
                      id: 1630,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1533411777000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1631?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Professor Putricide',
                      id: 1631,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1533411851000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1632?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Blood Prince Council',
                      id: 1632,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1533411988000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1633?namespace=static-8.3.0_32861-us',
                      },
                      name: "Blood-Queen Lana'thel",
                      id: 1633,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1533412045000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1634?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Valithria Dreamwalker',
                      id: 1634,
                    },
                    completed_count: 11,
                    last_kill_timestamp: 1533412185000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1635?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sindragosa',
                      id: 1635,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1533412479000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1636?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Lich King',
                      id: 1636,
                    },
                    completed_count: 18,
                    last_kill_timestamp: 1533412789000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/759?namespace=static-8.3.0_32861-us',
            },
            name: 'Ulduar',
            id: 759,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 14,
                total_count: 14,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1637?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Flame Leviathan',
                      id: 1637,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470127829000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1638?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ignis the Furnace Master',
                      id: 1638,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470128339000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1639?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Razorscale',
                      id: 1639,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470128102000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1640?namespace=static-8.3.0_32861-us',
                      },
                      name: 'XT-002 Deconstructor',
                      id: 1640,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470128455000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1641?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Assembly of Iron',
                      id: 1641,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470128673000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1642?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kologarn',
                      id: 1642,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470128907000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1643?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Auriaya',
                      id: 1643,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470129324000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1644?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Hodir',
                      id: 1644,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470131284000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1645?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Thorim',
                      id: 1645,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470131499000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1646?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Freya',
                      id: 1646,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470131628000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1647?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Mimiron',
                      id: 1647,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470132043000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1648?namespace=static-8.3.0_32861-us',
                      },
                      name: 'General Vezax',
                      id: 1648,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470132361000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1649?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Yogg-Saron',
                      id: 1649,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470133521000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1650?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Algalon the Observer',
                      id: 1650,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470131076000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 14,
                total_count: 14,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1637?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Flame Leviathan',
                      id: 1637,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1504408237000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1638?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ignis the Furnace Master',
                      id: 1638,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425787602000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1639?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Razorscale',
                      id: 1639,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425787360000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1640?namespace=static-8.3.0_32861-us',
                      },
                      name: 'XT-002 Deconstructor',
                      id: 1640,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1504408528000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1641?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Assembly of Iron',
                      id: 1641,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1493063828000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1642?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kologarn',
                      id: 1642,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1493063918000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1643?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Auriaya',
                      id: 1643,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1504407799000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1644?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Hodir',
                      id: 1644,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1493064012000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1645?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Thorim',
                      id: 1645,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1493064182000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1646?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Freya',
                      id: 1646,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1493064363000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1647?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Mimiron',
                      id: 1647,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1504407701000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1648?namespace=static-8.3.0_32861-us',
                      },
                      name: 'General Vezax',
                      id: 1648,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1493064593000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1649?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Yogg-Saron',
                      id: 1649,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1493064881000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1650?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Algalon the Observer',
                      id: 1650,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425789743000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/760?namespace=static-8.3.0_32861-us',
            },
            name: "Onyxia's Lair",
            id: 760,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1651?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Onyxia',
                      id: 1651,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1533604404000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1651?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Onyxia',
                      id: 1651,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1533604404000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/761?namespace=static-8.3.0_32861-us',
            },
            name: 'The Ruby Sanctum',
            id: 761,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN_HEROIC',
                name: '10 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1652?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Halion',
                      id: 1652,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470333606000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN_HEROIC',
                name: '25 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 1,
                total_count: 1,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1652?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Halion',
                      id: 1652,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1464227358000,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      expansion: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/journal-expansion/73?namespace=static-8.3.0_32861-us',
        },
        name: 'Cataclysm',
        id: 73,
      },
      instances: [
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/72?namespace=static-8.3.0_32861-us',
            },
            name: 'The Bastion of Twilight',
            id: 72,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_25_MAN_HEROIC',
                name: '25 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 5,
                total_count: 5,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/156?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Halfus Wyrmbreaker',
                      id: 156,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1530454702000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/157?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Theralion and Valiona',
                      id: 157,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1530454939000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/158?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ascendant Council',
                      id: 158,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1530455137000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/167?namespace=static-8.3.0_32861-us',
                      },
                      name: "Cho'gall",
                      id: 167,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1530455221000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/168?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sinestra',
                      id: 168,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1530455507000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/73?namespace=static-8.3.0_32861-us',
            },
            name: 'Blackwing Descent',
            id: 73,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_25_MAN_HEROIC',
                name: '25 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 6,
                total_count: 6,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/169?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Omnotron Defense System',
                      id: 169,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1450415320000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/170?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Magmaw',
                      id: 170,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1450415141000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/171?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Atramedes',
                      id: 171,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1450415920000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/172?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Chimaeron',
                      id: 172,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1450416176000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/173?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Maloriak',
                      id: 173,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1450415653000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/174?namespace=static-8.3.0_32861-us',
                      },
                      name: "Nefarian's End",
                      id: 174,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1450416474000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/74?namespace=static-8.3.0_32861-us',
            },
            name: 'Throne of the Four Winds',
            id: 74,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 2,
                total_count: 2,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/154?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Conclave of Wind',
                      id: 154,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1389157161000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/155?namespace=static-8.3.0_32861-us',
                      },
                      name: "Al'Akir",
                      id: 155,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1389157529000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN_HEROIC',
                name: '25 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 2,
                total_count: 2,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/154?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Conclave of Wind',
                      id: 154,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1533431995000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/155?namespace=static-8.3.0_32861-us',
                      },
                      name: "Al'Akir",
                      id: 155,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1533432046000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/75?namespace=static-8.3.0_32861-us',
            },
            name: 'Baradin Hold',
            id: 75,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 2,
                total_count: 3,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/140?namespace=static-8.3.0_32861-us',
                      },
                      name: "Occu'thar",
                      id: 140,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470252353000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/339?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Alizabal, Mistress of Hate',
                      id: 339,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470252414000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 3,
                total_count: 3,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/139?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Argaloth',
                      id: 139,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470252296000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/140?namespace=static-8.3.0_32861-us',
                      },
                      name: "Occu'thar",
                      id: 140,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470252353000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/339?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Alizabal, Mistress of Hate',
                      id: 339,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1470252414000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/78?namespace=static-8.3.0_32861-us',
            },
            name: 'Firelands',
            id: 78,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 7,
                total_count: 7,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/192?namespace=static-8.3.0_32861-us',
                      },
                      name: "Beth'tilac",
                      id: 192,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1370216620000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/193?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lord Rhyolith',
                      id: 193,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1370218877000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/194?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Alysrazor',
                      id: 194,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1370219318000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/195?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Shannox',
                      id: 195,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1370218297000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/196?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Baleroc, the Gatekeeper',
                      id: 196,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1370219674000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/197?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Majordomo Staghelm',
                      id: 197,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1370221188000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/198?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ragnaros',
                      id: 198,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1370221463000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 7,
                total_count: 7,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/192?namespace=static-8.3.0_32861-us',
                      },
                      name: "Beth'tilac",
                      id: 192,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426021082000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/193?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lord Rhyolith',
                      id: 193,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426021788000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/194?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Alysrazor',
                      id: 194,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426022109000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/195?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Shannox',
                      id: 195,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426021476000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/196?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Baleroc, the Gatekeeper',
                      id: 196,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426022405000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/197?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Majordomo Staghelm',
                      id: 197,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426022622000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/198?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ragnaros',
                      id: 198,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426023707000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN_HEROIC',
                name: '25 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 7,
                total_count: 7,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/192?namespace=static-8.3.0_32861-us',
                      },
                      name: "Beth'tilac",
                      id: 192,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1532660936000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/193?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lord Rhyolith',
                      id: 193,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1532660699000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/194?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Alysrazor',
                      id: 194,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1532660601000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/195?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Shannox',
                      id: 195,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1532660459000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/196?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Baleroc, the Gatekeeper',
                      id: 196,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1532661013000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/197?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Majordomo Staghelm',
                      id: 197,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1532661174000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/198?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ragnaros',
                      id: 198,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1532661314000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/187?namespace=static-8.3.0_32861-us',
            },
            name: 'Dragon Soul',
            id: 187,
          },
          modes: [
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 3,
                total_count: 8,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/311?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Morchok',
                      id: 311,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1386720584000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/324?namespace=static-8.3.0_32861-us',
                      },
                      name: "Warlord Zon'ozz",
                      id: 324,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1386720870000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/325?namespace=static-8.3.0_32861-us',
                      },
                      name: "Yor'sahj the Unsleeping",
                      id: 325,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1386721266000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_10_MAN_HEROIC',
                name: '10 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 8,
                total_count: 8,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/311?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Morchok',
                      id: 311,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1423803854000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/324?namespace=static-8.3.0_32861-us',
                      },
                      name: "Warlord Zon'ozz",
                      id: 324,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1423804166000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/325?namespace=static-8.3.0_32861-us',
                      },
                      name: "Yor'sahj the Unsleeping",
                      id: 325,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1423804257000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/317?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Hagara the Stormbinder',
                      id: 317,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1423804647000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/331?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ultraxion',
                      id: 331,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1423805066000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/332?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Warmaster Blackhorn',
                      id: 332,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1423805335000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/318?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Spine of Deathwing',
                      id: 318,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1423806301000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/333?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Madness of Deathwing',
                      id: 333,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1423806481000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN_HEROIC',
                name: '25 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 8,
                total_count: 8,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/311?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Morchok',
                      id: 311,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1532890102000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/324?namespace=static-8.3.0_32861-us',
                      },
                      name: "Warlord Zon'ozz",
                      id: 324,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1532890178000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/325?namespace=static-8.3.0_32861-us',
                      },
                      name: "Yor'sahj the Unsleeping",
                      id: 325,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1532890250000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/317?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Hagara the Stormbinder',
                      id: 317,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1532890422000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/331?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ultraxion',
                      id: 331,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1532890875000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/332?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Warmaster Blackhorn',
                      id: 332,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1532891149000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/318?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Spine of Deathwing',
                      id: 318,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1532891450000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/333?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Madness of Deathwing',
                      id: 333,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1532891577000,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      expansion: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/journal-expansion/74?namespace=static-8.3.0_32861-us',
        },
        name: 'Mists of Pandaria',
        id: 74,
      },
      instances: [
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/317?namespace=static-8.3.0_32861-us',
            },
            name: "Mogu'shan Vaults",
            id: 317,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 6,
                total_count: 6,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/679?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Stone Guard',
                      id: 679,
                    },
                    completed_count: 12,
                    last_kill_timestamp: 1349812696000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/689?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Feng the Accursed',
                      id: 689,
                    },
                    completed_count: 12,
                    last_kill_timestamp: 1349813317000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/682?namespace=static-8.3.0_32861-us',
                      },
                      name: "Gara'jal the Spiritbinder",
                      id: 682,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1349813996000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/687?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Spirit Kings',
                      id: 687,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1350427510000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/726?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Elegon',
                      id: 726,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1350425748000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/677?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Will of the Emperor',
                      id: 677,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1350426676000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 5,
                total_count: 6,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/679?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Stone Guard',
                      id: 679,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1349398658000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/689?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Feng the Accursed',
                      id: 689,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1481936998000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/682?namespace=static-8.3.0_32861-us',
                      },
                      name: "Gara'jal the Spiritbinder",
                      id: 682,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1350867386000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/687?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Spirit Kings',
                      id: 687,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1350871679000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/677?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Will of the Emperor',
                      id: 677,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1353376830000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 6,
                total_count: 6,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/679?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Stone Guard',
                      id: 679,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1349927385000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/689?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Feng the Accursed',
                      id: 689,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1350527694000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/682?namespace=static-8.3.0_32861-us',
                      },
                      name: "Gara'jal the Spiritbinder",
                      id: 682,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1352341347000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/687?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Spirit Kings',
                      id: 687,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1352345648000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/726?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Elegon',
                      id: 726,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1353296717000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/677?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Will of the Emperor',
                      id: 677,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1354249597000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_10_MAN_HEROIC',
                name: '10 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 6,
                total_count: 6,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/679?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Stone Guard',
                      id: 679,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1470355690000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/689?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Feng the Accursed',
                      id: 689,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1470356119000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/682?namespace=static-8.3.0_32861-us',
                      },
                      name: "Gara'jal the Spiritbinder",
                      id: 682,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1470356402000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/687?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Spirit Kings',
                      id: 687,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1356663223000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/726?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Elegon',
                      id: 726,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1356664748000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/677?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Will of the Emperor',
                      id: 677,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1356918970000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN_HEROIC',
                name: '25 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 6,
                total_count: 6,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/679?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Stone Guard',
                      id: 679,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1558831961000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/689?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Feng the Accursed',
                      id: 689,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1558832075000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/682?namespace=static-8.3.0_32861-us',
                      },
                      name: "Gara'jal the Spiritbinder",
                      id: 682,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1558832169000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/687?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Spirit Kings',
                      id: 687,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1558832334000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/726?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Elegon',
                      id: 726,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1558832578000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/677?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Will of the Emperor',
                      id: 677,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1558832985000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/320?namespace=static-8.3.0_32861-us',
            },
            name: 'Terrace of Endless Spring',
            id: 320,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 4,
                total_count: 4,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/683?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Protectors of the Endless',
                      id: 683,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1353449872000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/742?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tsulong',
                      id: 742,
                    },
                    completed_count: 16,
                    last_kill_timestamp: 1353451238000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/729?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lei Shi',
                      id: 729,
                    },
                    completed_count: 16,
                    last_kill_timestamp: 1353451998000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/709?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sha of Fear',
                      id: 709,
                    },
                    completed_count: 16,
                    last_kill_timestamp: 1353452775000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 3,
                total_count: 4,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/683?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Protectors of the Endless',
                      id: 683,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1358124656000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/729?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lei Shi',
                      id: 729,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1358223375000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/709?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sha of Fear',
                      id: 709,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1358224090000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 4,
                total_count: 4,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/683?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Protectors of the Endless',
                      id: 683,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1356065682000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/742?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tsulong',
                      id: 742,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1356066423000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/729?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lei Shi',
                      id: 729,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1356067163000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/709?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sha of Fear',
                      id: 709,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1356067993000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_10_MAN_HEROIC',
                name: '10 Player (Heroic)',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 1,
                total_count: 4,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/742?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tsulong',
                      id: 742,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1358217552000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN_HEROIC',
                name: '25 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 4,
                total_count: 4,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/683?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Protectors of the Endless',
                      id: 683,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1558833380000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/742?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tsulong',
                      id: 742,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1558833429000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/729?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lei Shi',
                      id: 729,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1558833528000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/709?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sha of Fear',
                      id: 709,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1558833616000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/330?namespace=static-8.3.0_32861-us',
            },
            name: 'Heart of Fear',
            id: 330,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 6,
                total_count: 6,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/745?namespace=static-8.3.0_32861-us',
                      },
                      name: "Imperial Vizier Zor'lok",
                      id: 745,
                    },
                    completed_count: 12,
                    last_kill_timestamp: 1352237547000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/744?namespace=static-8.3.0_32861-us',
                      },
                      name: "Blade Lord Ta'yak",
                      id: 744,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1352238220000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/713?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Garalon',
                      id: 713,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1352261257000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/741?namespace=static-8.3.0_32861-us',
                      },
                      name: "Wind Lord Mel'jarak",
                      id: 741,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1352851097000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/737?namespace=static-8.3.0_32861-us',
                      },
                      name: "Amber-Shaper Un'sok",
                      id: 737,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1352854241000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/743?namespace=static-8.3.0_32861-us',
                      },
                      name: "Grand Empress Shek'zeer",
                      id: 743,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1353283233000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 5,
                total_count: 6,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/745?namespace=static-8.3.0_32861-us',
                      },
                      name: "Imperial Vizier Zor'lok",
                      id: 745,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1352774841000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/744?namespace=static-8.3.0_32861-us',
                      },
                      name: "Blade Lord Ta'yak",
                      id: 744,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1355458857000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/713?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Garalon',
                      id: 713,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1355201155000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/737?namespace=static-8.3.0_32861-us',
                      },
                      name: "Amber-Shaper Un'sok",
                      id: 737,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1356056285000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/743?namespace=static-8.3.0_32861-us',
                      },
                      name: "Grand Empress Shek'zeer",
                      id: 743,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1356057919000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_10_MAN_HEROIC',
                name: '10 Player (Heroic)',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 4,
                total_count: 6,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/745?namespace=static-8.3.0_32861-us',
                      },
                      name: "Imperial Vizier Zor'lok",
                      id: 745,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1357528476000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/744?namespace=static-8.3.0_32861-us',
                      },
                      name: "Blade Lord Ta'yak",
                      id: 744,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1357530176000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/713?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Garalon',
                      id: 713,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1357535168000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/741?namespace=static-8.3.0_32861-us',
                      },
                      name: "Wind Lord Mel'jarak",
                      id: 741,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1357614293000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN_HEROIC',
                name: '25 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 6,
                total_count: 6,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/745?namespace=static-8.3.0_32861-us',
                      },
                      name: "Imperial Vizier Zor'lok",
                      id: 745,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1558833940000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/744?namespace=static-8.3.0_32861-us',
                      },
                      name: "Blade Lord Ta'yak",
                      id: 744,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1558833997000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/713?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Garalon',
                      id: 713,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1558834142000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/741?namespace=static-8.3.0_32861-us',
                      },
                      name: "Wind Lord Mel'jarak",
                      id: 741,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1558834234000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/737?namespace=static-8.3.0_32861-us',
                      },
                      name: "Amber-Shaper Un'sok",
                      id: 737,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1558834399000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/743?namespace=static-8.3.0_32861-us',
                      },
                      name: "Grand Empress Shek'zeer",
                      id: 743,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1558834463000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/362?namespace=static-8.3.0_32861-us',
            },
            name: 'Throne of Thunder',
            id: 362,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 11,
                total_count: 12,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/827?namespace=static-8.3.0_32861-us',
                      },
                      name: "Jin'rokh the Breaker",
                      id: 827,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1394812706000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/819?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Horridon',
                      id: 819,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1394814190000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/816?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Council of Elders',
                      id: 816,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1394815240000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/821?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Megaera',
                      id: 821,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1384048743000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/828?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ji-Kun',
                      id: 828,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1384049756000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/818?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Durumu the Forgotten',
                      id: 818,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1385871434000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/820?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Primordius',
                      id: 820,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1385872058000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/824?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Dark Animus',
                      id: 824,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1385872728000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/817?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Iron Qon',
                      id: 817,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1386294353000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/829?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Twin Consorts',
                      id: 829,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1386295048000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/832?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lei Shen',
                      id: 832,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1386295884000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_10_MAN',
                name: '10 Player',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 8,
                total_count: 12,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/827?namespace=static-8.3.0_32861-us',
                      },
                      name: "Jin'rokh the Breaker",
                      id: 827,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1467503673000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/819?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Horridon',
                      id: 819,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1467505943000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/816?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Council of Elders',
                      id: 816,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1467517173000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/825?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tortos',
                      id: 825,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1467517541000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/821?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Megaera',
                      id: 821,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1467518230000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/828?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ji-Kun',
                      id: 828,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1467518639000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/818?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Durumu the Forgotten',
                      id: 818,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1362973317000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/820?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Primordius',
                      id: 820,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1362975477000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN',
                name: '25 Player',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 12,
                total_count: 12,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/827?namespace=static-8.3.0_32861-us',
                      },
                      name: "Jin'rokh the Breaker",
                      id: 827,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1362537442000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/819?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Horridon',
                      id: 819,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1362540084000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/816?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Council of Elders',
                      id: 816,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1362541843000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/825?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tortos',
                      id: 825,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1362544989000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/821?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Megaera',
                      id: 821,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1362625987000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/828?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ji-Kun',
                      id: 828,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1362714918000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/818?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Durumu the Forgotten',
                      id: 818,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1363225578000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/820?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Primordius',
                      id: 820,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1363228809000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/824?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Dark Animus',
                      id: 824,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1363054317000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/817?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Iron Qon',
                      id: 817,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1363234849000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/829?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Twin Consorts',
                      id: 829,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1363311580000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/832?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lei Shen',
                      id: 832,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1363927708000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_25_MAN_HEROIC',
                name: '25 Player (Heroic)',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 2,
                total_count: 13,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/827?namespace=static-8.3.0_32861-us',
                      },
                      name: "Jin'rokh the Breaker",
                      id: 827,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1363831521000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/819?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Horridon',
                      id: 819,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1365569008000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/369?namespace=static-8.3.0_32861-us',
            },
            name: 'Siege of Orgrimmar',
            id: 369,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 13,
                total_count: 14,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/852?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Immerseus',
                      id: 852,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1385477951000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/849?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Fallen Protectors',
                      id: 849,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1385478504000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/866?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Norushen',
                      id: 866,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1386289939000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/867?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sha of Pride',
                      id: 867,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1386292224000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/868?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Galakras',
                      id: 868,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1385505464000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/864?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Iron Juggernaut',
                      id: 864,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1385505984000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/856?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kor'kron Dark Shaman",
                      id: 856,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1385507201000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/850?namespace=static-8.3.0_32861-us',
                      },
                      name: 'General Nazgrim',
                      id: 850,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1385575561000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/846?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Malkorok',
                      id: 846,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1385579881000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/870?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Spoils of Pandaria',
                      id: 870,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1385581736000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/851?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Thok the Bloodthirsty',
                      id: 851,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1385583747000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/865?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Siegecrafter Blackfuse',
                      id: 865,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1386437430000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/853?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Paragons of the Klaxxi',
                      id: 853,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1386439463000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'LEGACY_10_MAN_HEROIC',
                name: '10 Player (Heroic)',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 14,
                total_count: 14,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/852?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Immerseus',
                      id: 852,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552460213000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/849?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Fallen Protectors',
                      id: 849,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552460330000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/866?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Norushen',
                      id: 866,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552460556000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/867?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sha of Pride',
                      id: 867,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552460683000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/868?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Galakras',
                      id: 868,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552461548000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/864?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Iron Juggernaut',
                      id: 864,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552461634000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/856?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kor'kron Dark Shaman",
                      id: 856,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552461738000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/850?namespace=static-8.3.0_32861-us',
                      },
                      name: 'General Nazgrim',
                      id: 850,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552461915000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/846?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Malkorok',
                      id: 846,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552462070000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/870?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Spoils of Pandaria',
                      id: 870,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552462756000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/851?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Thok the Bloodthirsty',
                      id: 851,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552462878000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/865?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Siegecrafter Blackfuse',
                      id: 865,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552462358000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/853?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Paragons of the Klaxxi',
                      id: 853,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552463106000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/869?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Garrosh Hellscream',
                      id: 869,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552463436000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 2,
                total_count: 14,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/852?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Immerseus',
                      id: 852,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1474952394000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/849?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Fallen Protectors',
                      id: 849,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1474952623000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 14,
                total_count: 14,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/852?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Immerseus',
                      id: 852,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552460213000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/849?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Fallen Protectors',
                      id: 849,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552460330000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/866?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Norushen',
                      id: 866,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552460556000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/867?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sha of Pride',
                      id: 867,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552460683000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/868?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Galakras',
                      id: 868,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552461548000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/864?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Iron Juggernaut',
                      id: 864,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552461634000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/856?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kor'kron Dark Shaman",
                      id: 856,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552461738000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/850?namespace=static-8.3.0_32861-us',
                      },
                      name: 'General Nazgrim',
                      id: 850,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552461915000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/846?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Malkorok',
                      id: 846,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552462070000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/870?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Spoils of Pandaria',
                      id: 870,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552462756000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/851?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Thok the Bloodthirsty',
                      id: 851,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552462878000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/865?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Siegecrafter Blackfuse',
                      id: 865,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552462358000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/853?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Paragons of the Klaxxi',
                      id: 853,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552463106000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/869?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Garrosh Hellscream',
                      id: 869,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552463436000,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      expansion: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/journal-expansion/124?namespace=static-8.3.0_32861-us',
        },
        name: 'Warlords of Draenor',
        id: 124,
      },
      instances: [
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/457?namespace=static-8.3.0_32861-us',
            },
            name: 'Blackrock Foundry',
            id: 457,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 10,
                total_count: 10,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1202?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Oregorger',
                      id: 1202,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1428472864000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1155?namespace=static-8.3.0_32861-us',
                      },
                      name: "Hans'gar and Franzok",
                      id: 1155,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1428476637000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1122?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Beastlord Darmac',
                      id: 1122,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426721344000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1161?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Gruul',
                      id: 1161,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1428473364000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1123?namespace=static-8.3.0_32861-us',
                      },
                      name: "Flamebender Ka'graz",
                      id: 1123,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1428477272000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1147?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Operator Thogar',
                      id: 1147,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426722027000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1154?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Blast Furnace',
                      id: 1154,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1428471666000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1162?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kromog',
                      id: 1162,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1428477788000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1203?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Iron Maidens',
                      id: 1203,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1426723108000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/959?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Blackhand',
                      id: 959,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1447795433000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 9,
                total_count: 10,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1202?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Oregorger',
                      id: 1202,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1429330756000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1155?namespace=static-8.3.0_32861-us',
                      },
                      name: "Hans'gar and Franzok",
                      id: 1155,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1429327163000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1122?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Beastlord Darmac',
                      id: 1122,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1429323556000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1161?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Gruul',
                      id: 1161,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1429328690000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1123?namespace=static-8.3.0_32861-us',
                      },
                      name: "Flamebender Ka'graz",
                      id: 1123,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1425691678000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1147?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Operator Thogar',
                      id: 1147,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1429323968000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1154?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Blast Furnace',
                      id: 1154,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1429585778000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1203?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Iron Maidens',
                      id: 1203,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1429324564000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/959?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Blackhand',
                      id: 959,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1428728377000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 10,
                total_count: 10,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1202?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Oregorger',
                      id: 1202,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1429848399000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1155?namespace=static-8.3.0_32861-us',
                      },
                      name: "Hans'gar and Franzok",
                      id: 1155,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1429839062000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1122?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Beastlord Darmac',
                      id: 1122,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1429841735000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1161?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Gruul',
                      id: 1161,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1429847705000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1123?namespace=static-8.3.0_32861-us',
                      },
                      name: "Flamebender Ka'graz",
                      id: 1123,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1429839888000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1147?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Operator Thogar',
                      id: 1147,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1429842468000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1154?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Blast Furnace',
                      id: 1154,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1429849463000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1162?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kromog',
                      id: 1162,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1429840753000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1203?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Iron Maidens',
                      id: 1203,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1429846448000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/959?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Blackhand',
                      id: 959,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1429851722000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 10,
                total_count: 10,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1202?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Oregorger',
                      id: 1202,
                    },
                    completed_count: 11,
                    last_kill_timestamp: 1552456768000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1155?namespace=static-8.3.0_32861-us',
                      },
                      name: "Hans'gar and Franzok",
                      id: 1155,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1552457317000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1122?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Beastlord Darmac',
                      id: 1122,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1552456998000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1161?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Gruul',
                      id: 1161,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1552456859000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1123?namespace=static-8.3.0_32861-us',
                      },
                      name: "Flamebender Ka'graz",
                      id: 1123,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1552457400000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1147?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Operator Thogar',
                      id: 1147,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552457159000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1154?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Blast Furnace',
                      id: 1154,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552458283000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1162?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kromog',
                      id: 1162,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1552457469000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1203?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Iron Maidens',
                      id: 1203,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552457717000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/959?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Blackhand',
                      id: 959,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1552458460000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/477?namespace=static-8.3.0_32861-us',
            },
            name: 'Highmaul',
            id: 477,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 6,
                total_count: 6,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1128?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kargath Bladefist',
                      id: 1128,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1428267767000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/971?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Butcher',
                      id: 971,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1428268011000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1196?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Brackenspore',
                      id: 1196,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1428268459000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1148?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Twin Ogron',
                      id: 1148,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1428275648000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1153?namespace=static-8.3.0_32861-us',
                      },
                      name: "Ko'ragh",
                      id: 1153,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1428276087000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1197?namespace=static-8.3.0_32861-us',
                      },
                      name: "Imperator Mar'gok",
                      id: 1197,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1447797071000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 7,
                total_count: 7,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1128?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kargath Bladefist',
                      id: 1128,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1429319350000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/971?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Butcher',
                      id: 971,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1429319781000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1195?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tectus',
                      id: 1195,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1429321033000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1196?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Brackenspore',
                      id: 1196,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1429320637000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1148?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Twin Ogron',
                      id: 1148,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1429321410000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1153?namespace=static-8.3.0_32861-us',
                      },
                      name: "Ko'ragh",
                      id: 1153,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1429321627000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1197?namespace=static-8.3.0_32861-us',
                      },
                      name: "Imperator Mar'gok",
                      id: 1197,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1429322457000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 7,
                total_count: 7,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1128?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kargath Bladefist',
                      id: 1128,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1422845536000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/971?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Butcher',
                      id: 971,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1422847132000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1195?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tectus',
                      id: 1195,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1422850858000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1196?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Brackenspore',
                      id: 1196,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1422849907000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1148?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Twin Ogron',
                      id: 1148,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1422851937000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1153?namespace=static-8.3.0_32861-us',
                      },
                      name: "Ko'ragh",
                      id: 1153,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1422852841000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1197?namespace=static-8.3.0_32861-us',
                      },
                      name: "Imperator Mar'gok",
                      id: 1197,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1422857409000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 7,
                total_count: 7,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1128?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kargath Bladefist',
                      id: 1128,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1552459052000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/971?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Butcher',
                      id: 971,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1471741928000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1195?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tectus',
                      id: 1195,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1471742503000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1196?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Brackenspore',
                      id: 1196,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1471742143000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1148?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Twin Ogron',
                      id: 1148,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1471742794000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1153?namespace=static-8.3.0_32861-us',
                      },
                      name: "Ko'ragh",
                      id: 1153,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1471742983000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1197?namespace=static-8.3.0_32861-us',
                      },
                      name: "Imperator Mar'gok",
                      id: 1197,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1471744325000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/669?namespace=static-8.3.0_32861-us',
            },
            name: 'Hellfire Citadel',
            id: 669,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 13,
                total_count: 13,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1426?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Hellfire Assault',
                      id: 1426,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1467337575000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1425?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Iron Reaver',
                      id: 1425,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1467337949000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1392?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kormrok',
                      id: 1392,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1467338692000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1432?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Hellfire High Council',
                      id: 1432,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1467339233000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1396?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kilrogg Deadeye',
                      id: 1396,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1467339599000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1372?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Gorefiend',
                      id: 1372,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1467340114000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1433?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Shadow-Lord Iskar',
                      id: 1433,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1449457959000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1427?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Socrethar the Eternal',
                      id: 1427,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1449458757000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1391?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Fel Lord Zakuun',
                      id: 1391,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1449455306000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1447?namespace=static-8.3.0_32861-us',
                      },
                      name: "Xhul'horac",
                      id: 1447,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1449456564000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1394?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tyrant Velhari',
                      id: 1394,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1449459641000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1395?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Mannoroth',
                      id: 1395,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1449457220000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1438?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Archimonde',
                      id: 1438,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1470612901000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 2,
                total_count: 13,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1395?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Mannoroth',
                      id: 1395,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1447740931000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1438?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Archimonde',
                      id: 1438,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1468292289000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 8,
                total_count: 13,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1426?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Hellfire Assault',
                      id: 1426,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1469055851000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1433?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Shadow-Lord Iskar',
                      id: 1433,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1447732328000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1427?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Socrethar the Eternal',
                      id: 1427,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1447737095000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1391?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Fel Lord Zakuun',
                      id: 1391,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1447735446000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1447?namespace=static-8.3.0_32861-us',
                      },
                      name: "Xhul'horac",
                      id: 1447,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1447734527000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1394?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tyrant Velhari',
                      id: 1394,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1447739110000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1395?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Mannoroth',
                      id: 1395,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1471919765000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1438?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Archimonde',
                      id: 1438,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1471920611000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 13,
                total_count: 13,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1426?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Hellfire Assault',
                      id: 1426,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552602786000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1425?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Iron Reaver',
                      id: 1425,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552602836000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1392?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kormrok',
                      id: 1392,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552602978000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1432?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Hellfire High Council',
                      id: 1432,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552603109000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1396?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Kilrogg Deadeye',
                      id: 1396,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552603203000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1372?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Gorefiend',
                      id: 1372,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552603408000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1433?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Shadow-Lord Iskar',
                      id: 1433,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552603550000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1427?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Socrethar the Eternal',
                      id: 1427,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552603902000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1391?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Fel Lord Zakuun',
                      id: 1391,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552603661000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1447?namespace=static-8.3.0_32861-us',
                      },
                      name: "Xhul'horac",
                      id: 1447,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552603738000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1394?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tyrant Velhari',
                      id: 1394,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552604077000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1395?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Mannoroth',
                      id: 1395,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552604211000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1438?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Archimonde',
                      id: 1438,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552604336000,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      expansion: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/journal-expansion/395?namespace=static-8.3.0_32861-us',
        },
        name: 'Legion',
        id: 395,
      },
      instances: [
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/768?namespace=static-8.3.0_32861-us',
            },
            name: 'The Emerald Nightmare',
            id: 768,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 7,
                total_count: 7,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1703?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Nythendra',
                      id: 1703,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1487377183000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1738?namespace=static-8.3.0_32861-us',
                      },
                      name: "Il'gynoth, Heart of Corruption",
                      id: 1738,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1487377750000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1744?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Elerethe Renferal',
                      id: 1744,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1487378208000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1667?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ursoc',
                      id: 1667,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1496213252000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1704?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Dragons of Nightmare',
                      id: 1704,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1489512634000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1750?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Cenarius',
                      id: 1750,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1486585476000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1726?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Xavius',
                      id: 1726,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1496731431000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 7,
                total_count: 7,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1703?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Nythendra',
                      id: 1703,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1488773325000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1738?namespace=static-8.3.0_32861-us',
                      },
                      name: "Il'gynoth, Heart of Corruption",
                      id: 1738,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1488771629000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1744?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Elerethe Renferal',
                      id: 1744,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1544919195000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1667?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ursoc',
                      id: 1667,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1488769754000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1704?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Dragons of Nightmare',
                      id: 1704,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1488770395000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1750?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Cenarius',
                      id: 1750,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1488771941000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1726?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Xavius',
                      id: 1726,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1488772664000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 7,
                total_count: 7,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1703?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Nythendra',
                      id: 1703,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1492223516000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1738?namespace=static-8.3.0_32861-us',
                      },
                      name: "Il'gynoth, Heart of Corruption",
                      id: 1738,
                    },
                    completed_count: 16,
                    last_kill_timestamp: 1492224739000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1744?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Elerethe Renferal',
                      id: 1744,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1492224405000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1667?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ursoc',
                      id: 1667,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1492223940000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1704?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Dragons of Nightmare',
                      id: 1704,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1492224171000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1750?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Cenarius',
                      id: 1750,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1492224966000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1726?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Xavius',
                      id: 1726,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1492225281000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 7,
                total_count: 7,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1703?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Nythendra',
                      id: 1703,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1494730826000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1738?namespace=static-8.3.0_32861-us',
                      },
                      name: "Il'gynoth, Heart of Corruption",
                      id: 1738,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1491690223000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1744?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Elerethe Renferal',
                      id: 1744,
                    },
                    completed_count: 12,
                    last_kill_timestamp: 1491690892000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1667?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ursoc',
                      id: 1667,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1494731606000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1704?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Dragons of Nightmare',
                      id: 1704,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1491691540000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1750?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Cenarius',
                      id: 1750,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1491692745000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1726?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Xavius',
                      id: 1726,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1484196172000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/786?namespace=static-8.3.0_32861-us',
            },
            name: 'The Nighthold',
            id: 786,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 10,
                total_count: 10,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1706?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Skorpyron',
                      id: 1706,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1496214901000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1725?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Chronomatic Anomaly',
                      id: 1725,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1495641066000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1731?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Trilliax',
                      id: 1731,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1495641394000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1751?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Spellblade Aluriel',
                      id: 1751,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1495638991000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1762?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tichondrius',
                      id: 1762,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1496380790000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1713?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Krosus',
                      id: 1713,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1496381250000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1761?namespace=static-8.3.0_32861-us',
                      },
                      name: "High Botanist Tel'arn",
                      id: 1761,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1495639986000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1732?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Star Augur Etraeus',
                      id: 1732,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1495639371000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1743?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Grand Magistrix Elisande',
                      id: 1743,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1496381748000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1737?namespace=static-8.3.0_32861-us',
                      },
                      name: "Gul'dan",
                      id: 1737,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1495636855000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 10,
                total_count: 10,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1706?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Skorpyron',
                      id: 1706,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1497745830000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1725?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Chronomatic Anomaly',
                      id: 1725,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1497746141000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1731?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Trilliax',
                      id: 1731,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1497746360000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1751?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Spellblade Aluriel',
                      id: 1751,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1497746666000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1762?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tichondrius',
                      id: 1762,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1497746956000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1713?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Krosus',
                      id: 1713,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1497747457000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1761?namespace=static-8.3.0_32861-us',
                      },
                      name: "High Botanist Tel'arn",
                      id: 1761,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1497748314000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1732?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Star Augur Etraeus',
                      id: 1732,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1497747820000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1743?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Grand Magistrix Elisande',
                      id: 1743,
                    },
                    completed_count: 13,
                    last_kill_timestamp: 1497748828000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1737?namespace=static-8.3.0_32861-us',
                      },
                      name: "Gul'dan",
                      id: 1737,
                    },
                    completed_count: 13,
                    last_kill_timestamp: 1497749208000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 10,
                total_count: 10,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1706?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Skorpyron',
                      id: 1706,
                    },
                    completed_count: 21,
                    last_kill_timestamp: 1497672826000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1725?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Chronomatic Anomaly',
                      id: 1725,
                    },
                    completed_count: 21,
                    last_kill_timestamp: 1497673245000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1731?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Trilliax',
                      id: 1731,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1497673612000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1751?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Spellblade Aluriel',
                      id: 1751,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1497670466000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1762?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tichondrius',
                      id: 1762,
                    },
                    completed_count: 21,
                    last_kill_timestamp: 1498181932000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1713?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Krosus',
                      id: 1713,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1497670001000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1761?namespace=static-8.3.0_32861-us',
                      },
                      name: "High Botanist Tel'arn",
                      id: 1761,
                    },
                    completed_count: 21,
                    last_kill_timestamp: 1498181246000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1732?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Star Augur Etraeus',
                      id: 1732,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1497671464000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1743?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Grand Magistrix Elisande',
                      id: 1743,
                    },
                    completed_count: 21,
                    last_kill_timestamp: 1498182659000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1737?namespace=static-8.3.0_32861-us',
                      },
                      name: "Gul'dan",
                      id: 1737,
                    },
                    completed_count: 22,
                    last_kill_timestamp: 1498183255000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 10,
                total_count: 10,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1706?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Skorpyron',
                      id: 1706,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1497845038000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1725?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Chronomatic Anomaly',
                      id: 1725,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1497845701000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1731?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Trilliax',
                      id: 1731,
                    },
                    completed_count: 11,
                    last_kill_timestamp: 1497846179000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1751?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Spellblade Aluriel',
                      id: 1751,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1497848443000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1762?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Tichondrius',
                      id: 1762,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1508132857000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1713?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Krosus',
                      id: 1713,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1497849289000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1761?namespace=static-8.3.0_32861-us',
                      },
                      name: "High Botanist Tel'arn",
                      id: 1761,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1497851092000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1732?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Star Augur Etraeus',
                      id: 1732,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1496034049000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1743?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Grand Magistrix Elisande',
                      id: 1743,
                    },
                    completed_count: 32,
                    last_kill_timestamp: 1531706758000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1737?namespace=static-8.3.0_32861-us',
                      },
                      name: "Gul'dan",
                      id: 1737,
                    },
                    completed_count: 28,
                    last_kill_timestamp: 1531707076000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/861?namespace=static-8.3.0_32861-us',
            },
            name: 'Trial of Valor',
            id: 861,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 3,
                total_count: 3,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1819?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Odyn',
                      id: 1819,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1483400768000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1830?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Guarm',
                      id: 1830,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1483401350000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1829?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Helya',
                      id: 1829,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1483401916000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 3,
                total_count: 3,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1819?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Odyn',
                      id: 1819,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1480559754000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1830?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Guarm',
                      id: 1830,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1480560448000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1829?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Helya',
                      id: 1829,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1482789060000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 3,
                total_count: 3,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1819?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Odyn',
                      id: 1819,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1494024453000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1830?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Guarm',
                      id: 1830,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1494024822000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1829?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Helya',
                      id: 1829,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1494025242000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 3,
                total_count: 3,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1819?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Odyn',
                      id: 1819,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1531716843000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1830?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Guarm',
                      id: 1830,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1531717112000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1829?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Helya',
                      id: 1829,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1531717458000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/875?namespace=static-8.3.0_32861-us',
            },
            name: 'Tomb of Sargeras',
            id: 875,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 9,
                total_count: 9,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1862?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Goroth',
                      id: 1862,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1511228510000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1867?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Demonic Inquisition',
                      id: 1867,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1502057998000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1856?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Harjatan',
                      id: 1856,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1511228757000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1903?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sisters of the Moon',
                      id: 1903,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1502058637000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1861?namespace=static-8.3.0_32861-us',
                      },
                      name: "Mistress Sassz'ine",
                      id: 1861,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1511229124000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1896?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Desolate Host',
                      id: 1896,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1502059346000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1897?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Maiden of Vigilance',
                      id: 1897,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1508809040000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1873?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Fallen Avatar',
                      id: 1873,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1508809433000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1898?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kil'jaeden",
                      id: 1898,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1507678870000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 9,
                total_count: 9,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1862?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Goroth',
                      id: 1862,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1508207828000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1867?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Demonic Inquisition',
                      id: 1867,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1508208858000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1856?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Harjatan',
                      id: 1856,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1508209214000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1903?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sisters of the Moon',
                      id: 1903,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1508210182000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1861?namespace=static-8.3.0_32861-us',
                      },
                      name: "Mistress Sassz'ine",
                      id: 1861,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1508209719000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1896?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Desolate Host',
                      id: 1896,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1508211480000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1897?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Maiden of Vigilance',
                      id: 1897,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1501301105000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1873?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Fallen Avatar',
                      id: 1873,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1501301690000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1898?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kil'jaeden",
                      id: 1898,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1501302661000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 9,
                total_count: 9,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1862?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Goroth',
                      id: 1862,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1511910139000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1867?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Demonic Inquisition',
                      id: 1867,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1511910536000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1856?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Harjatan',
                      id: 1856,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1511911012000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1903?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sisters of the Moon',
                      id: 1903,
                    },
                    completed_count: 13,
                    last_kill_timestamp: 1510286610000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1861?namespace=static-8.3.0_32861-us',
                      },
                      name: "Mistress Sassz'ine",
                      id: 1861,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1511911516000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1896?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Desolate Host',
                      id: 1896,
                    },
                    completed_count: 13,
                    last_kill_timestamp: 1510287335000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1897?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Maiden of Vigilance',
                      id: 1897,
                    },
                    completed_count: 17,
                    last_kill_timestamp: 1510287896000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1873?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Fallen Avatar',
                      id: 1873,
                    },
                    completed_count: 19,
                    last_kill_timestamp: 1511158949000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1898?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kil'jaeden",
                      id: 1898,
                    },
                    completed_count: 19,
                    last_kill_timestamp: 1511161109000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 8,
                total_count: 9,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1862?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Goroth',
                      id: 1862,
                    },
                    completed_count: 18,
                    last_kill_timestamp: 1523326597000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1867?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Demonic Inquisition',
                      id: 1867,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1523326958000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1856?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Harjatan',
                      id: 1856,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1523327364000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1903?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Sisters of the Moon',
                      id: 1903,
                    },
                    completed_count: 18,
                    last_kill_timestamp: 1523327897000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1861?namespace=static-8.3.0_32861-us',
                      },
                      name: "Mistress Sassz'ine",
                      id: 1861,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1520308408000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1896?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Desolate Host',
                      id: 1896,
                    },
                    completed_count: 15,
                    last_kill_timestamp: 1521523005000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1897?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Maiden of Vigilance',
                      id: 1897,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1526357674000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1873?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Fallen Avatar',
                      id: 1873,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1528166904000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/946?namespace=static-8.3.0_32861-us',
            },
            name: 'Antorus, the Burning Throne',
            id: 946,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 10,
                total_count: 11,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1992?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Garothi Worldbreaker',
                      id: 1992,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1526342988000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1987?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Felhounds of Sargeras',
                      id: 1987,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1526343566000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1997?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Antoran High Command',
                      id: 1997,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1533507689000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1985?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Portal Keeper Hasabel',
                      id: 1985,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1526344301000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2025?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Eonar the Life-Binder',
                      id: 2025,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1548626478000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2009?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Imonar the Soulhunter',
                      id: 2009,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1533508113000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2004?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kin'garoth",
                      id: 2004,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1563684539000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1986?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Coven of Shivarra',
                      id: 1986,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1563684937000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1983?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Varimathras',
                      id: 1983,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1563684781000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2031?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Argus the Unmaker',
                      id: 2031,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1523554546000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 11,
                total_count: 11,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1992?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Garothi Worldbreaker',
                      id: 1992,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1530507316000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1987?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Felhounds of Sargeras',
                      id: 1987,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1530507709000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1997?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Antoran High Command',
                      id: 1997,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1530508918000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1985?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Portal Keeper Hasabel',
                      id: 1985,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1530508201000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2025?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Eonar the Life-Binder',
                      id: 2025,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1514432937000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2009?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Imonar the Soulhunter',
                      id: 2009,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1530509323000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2004?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kin'garoth",
                      id: 2004,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1514433949000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1986?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Coven of Shivarra',
                      id: 1986,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1530510504000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1983?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Varimathras',
                      id: 1983,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1530509742000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1984?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Aggramar',
                      id: 1984,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1530511340000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2031?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Argus the Unmaker',
                      id: 2031,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1514436535000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 11,
                total_count: 11,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1992?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Garothi Worldbreaker',
                      id: 1992,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1520392170000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1987?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Felhounds of Sargeras',
                      id: 1987,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1520392656000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1997?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Antoran High Command',
                      id: 1997,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1520394944000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1985?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Portal Keeper Hasabel',
                      id: 1985,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1520393435000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2025?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Eonar the Life-Binder',
                      id: 2025,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1520395719000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2009?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Imonar the Soulhunter',
                      id: 2009,
                    },
                    completed_count: 11,
                    last_kill_timestamp: 1520396496000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2004?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kin'garoth",
                      id: 2004,
                    },
                    completed_count: 11,
                    last_kill_timestamp: 1520397261000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1986?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Coven of Shivarra',
                      id: 1986,
                    },
                    completed_count: 12,
                    last_kill_timestamp: 1520399418000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1983?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Varimathras',
                      id: 1983,
                    },
                    completed_count: 12,
                    last_kill_timestamp: 1520398792000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1984?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Aggramar',
                      id: 1984,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1525923523000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2031?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Argus the Unmaker',
                      id: 2031,
                    },
                    completed_count: 17,
                    last_kill_timestamp: 1525925153000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 11,
                total_count: 11,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1992?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Garothi Worldbreaker',
                      id: 1992,
                    },
                    completed_count: 18,
                    last_kill_timestamp: 1533522617000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1987?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Felhounds of Sargeras',
                      id: 1987,
                    },
                    completed_count: 13,
                    last_kill_timestamp: 1532410152000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1997?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Antoran High Command',
                      id: 1997,
                    },
                    completed_count: 13,
                    last_kill_timestamp: 1532411731000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1985?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Portal Keeper Hasabel',
                      id: 1985,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1532324358000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2025?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Eonar the Life-Binder',
                      id: 2025,
                    },
                    completed_count: 11,
                    last_kill_timestamp: 1529374729000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2009?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Imonar the Soulhunter',
                      id: 2009,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1529894717000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2004?namespace=static-8.3.0_32861-us',
                      },
                      name: "Kin'garoth",
                      id: 2004,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1529895834000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1986?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Coven of Shivarra',
                      id: 1986,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1529903341000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1983?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Varimathras',
                      id: 1983,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1529899364000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/1984?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Aggramar',
                      id: 1984,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1533524203000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2031?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Argus the Unmaker',
                      id: 2031,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1533525867000,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      expansion: {
        key: {
          href:
            'https://us.api.blizzard.com/data/wow/journal-expansion/396?namespace=static-8.3.0_32861-us',
        },
        name: 'Battle for Azeroth',
        id: 396,
      },
      instances: [
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/1031?namespace=static-8.3.0_32861-us',
            },
            name: 'Uldir',
            id: 1031,
          },
          modes: [
            {
              difficulty: {
                type: 'LFR',
                name: 'Raid Finder',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 2,
                total_count: 8,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2168?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Taloc',
                      id: 2168,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1552451765000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2147?namespace=static-8.3.0_32861-us',
                      },
                      name: "G'huun",
                      id: 2147,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1548128368000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 8,
                total_count: 8,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2168?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Taloc',
                      id: 2168,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1539311039000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2167?namespace=static-8.3.0_32861-us',
                      },
                      name: 'MOTHER',
                      id: 2167,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1539311640000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2146?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Fetid Devourer',
                      id: 2146,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1539313377000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2169?namespace=static-8.3.0_32861-us',
                      },
                      name: "Zek'voz, Herald of N'Zoth",
                      id: 2169,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1539312325000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2166?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Vectis',
                      id: 2166,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1539312890000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2195?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Zul, Reborn',
                      id: 2195,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1539314187000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2194?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Mythrax the Unraveler',
                      id: 2194,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1539314607000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2147?namespace=static-8.3.0_32861-us',
                      },
                      name: "G'huun",
                      id: 2147,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1539315210000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 8,
                total_count: 8,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2168?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Taloc',
                      id: 2168,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1540526218000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2167?namespace=static-8.3.0_32861-us',
                      },
                      name: 'MOTHER',
                      id: 2167,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1540526754000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2146?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Fetid Devourer',
                      id: 2146,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1540528859000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2169?namespace=static-8.3.0_32861-us',
                      },
                      name: "Zek'voz, Herald of N'Zoth",
                      id: 2169,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1540527568000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2166?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Vectis',
                      id: 2166,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1540528381000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2195?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Zul, Reborn',
                      id: 2195,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1540529719000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2194?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Mythrax the Unraveler',
                      id: 2194,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1540530189000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2147?namespace=static-8.3.0_32861-us',
                      },
                      name: "G'huun",
                      id: 2147,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1540531941000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 8,
                total_count: 8,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2168?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Taloc',
                      id: 2168,
                    },
                    completed_count: 13,
                    last_kill_timestamp: 1548040220000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2167?namespace=static-8.3.0_32861-us',
                      },
                      name: 'MOTHER',
                      id: 2167,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1548040697000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2146?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Fetid Devourer',
                      id: 2146,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1548043513000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2169?namespace=static-8.3.0_32861-us',
                      },
                      name: "Zek'voz, Herald of N'Zoth",
                      id: 2169,
                    },
                    completed_count: 13,
                    last_kill_timestamp: 1548041829000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2166?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Vectis',
                      id: 2166,
                    },
                    completed_count: 12,
                    last_kill_timestamp: 1548042656000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2195?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Zul, Reborn',
                      id: 2195,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1548045544000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2194?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Mythrax the Unraveler',
                      id: 2194,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1548049279000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2147?namespace=static-8.3.0_32861-us',
                      },
                      name: "G'huun",
                      id: 2147,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1547445615000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/1176?namespace=static-8.3.0_32861-us',
            },
            name: "Battle of Dazar'alor",
            id: 1176,
          },
          modes: [
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 9,
                total_count: 9,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2333?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Champion of the Light',
                      id: 2333,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1553482790000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2325?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Grong, the Jungle Lord',
                      id: 2325,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1553483341000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2341?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Jadefire Masters',
                      id: 2341,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1553485265000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2342?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Opulence',
                      id: 2342,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1553486423000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2330?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Conclave of the Chosen',
                      id: 2330,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1553486917000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2335?namespace=static-8.3.0_32861-us',
                      },
                      name: 'King Rastakhan',
                      id: 2335,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1553487537000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2334?namespace=static-8.3.0_32861-us',
                      },
                      name: 'High Tinker Mekkatorque',
                      id: 2334,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1553488524000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2337?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Stormwall Blockade',
                      id: 2337,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1553489563000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2343?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lady Jaina Proudmoore',
                      id: 2343,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1553491008000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 9,
                total_count: 9,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2333?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Champion of the Light',
                      id: 2333,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1559536040000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2325?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Grong, the Jungle Lord',
                      id: 2325,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1559536496000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2341?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Jadefire Masters',
                      id: 2341,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1559537033000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2342?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Opulence',
                      id: 2342,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1559537700000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2330?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Conclave of the Chosen',
                      id: 2330,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1559538194000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2335?namespace=static-8.3.0_32861-us',
                      },
                      name: 'King Rastakhan',
                      id: 2335,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1559539037000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2334?namespace=static-8.3.0_32861-us',
                      },
                      name: 'High Tinker Mekkatorque',
                      id: 2334,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1559539782000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2337?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Stormwall Blockade',
                      id: 2337,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1559540541000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2343?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lady Jaina Proudmoore',
                      id: 2343,
                    },
                    completed_count: 6,
                    last_kill_timestamp: 1559541107000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 9,
                total_count: 9,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2333?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Champion of the Light',
                      id: 2333,
                    },
                    completed_count: 21,
                    last_kill_timestamp: 1578366929000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2325?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Grong, the Jungle Lord',
                      id: 2325,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1578367591000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2341?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Jadefire Masters',
                      id: 2341,
                    },
                    completed_count: 20,
                    last_kill_timestamp: 1578368165000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2342?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Opulence',
                      id: 2342,
                    },
                    completed_count: 18,
                    last_kill_timestamp: 1578370343000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2330?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Conclave of the Chosen',
                      id: 2330,
                    },
                    completed_count: 18,
                    last_kill_timestamp: 1578370903000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2335?namespace=static-8.3.0_32861-us',
                      },
                      name: 'King Rastakhan',
                      id: 2335,
                    },
                    completed_count: 16,
                    last_kill_timestamp: 1578372314000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2334?namespace=static-8.3.0_32861-us',
                      },
                      name: 'High Tinker Mekkatorque',
                      id: 2334,
                    },
                    completed_count: 13,
                    last_kill_timestamp: 1578885744000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2337?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Stormwall Blockade',
                      id: 2337,
                    },
                    completed_count: 11,
                    last_kill_timestamp: 1578886432000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2343?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lady Jaina Proudmoore',
                      id: 2343,
                    },
                    completed_count: 12,
                    last_kill_timestamp: 1594010119000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/1177?namespace=static-8.3.0_32861-us',
            },
            name: 'Crucible of Storms',
            id: 1177,
          },
          modes: [
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 2,
                total_count: 2,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2328?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Restless Cabal',
                      id: 2328,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1560826345000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2332?namespace=static-8.3.0_32861-us',
                      },
                      name: "Uu'nat, Harbinger of the Void",
                      id: 2332,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1560828570000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/1179?namespace=static-8.3.0_32861-us',
            },
            name: 'The Eternal Palace',
            id: 1179,
          },
          modes: [
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 8,
                total_count: 8,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2352?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Abyssal Commander Sivara',
                      id: 2352,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1565231374000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2347?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Blackwater Behemoth',
                      id: 2347,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1565232336000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2353?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Radiance of Azshara',
                      id: 2353,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1565234004000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2354?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lady Ashvane',
                      id: 2354,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1565234619000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2351?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Orgozoa',
                      id: 2351,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1565236615000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2359?namespace=static-8.3.0_32861-us',
                      },
                      name: "The Queen's Court",
                      id: 2359,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1565237935000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2349?namespace=static-8.3.0_32861-us',
                      },
                      name: "Za'qul, Harbinger of Ny'alotha",
                      id: 2349,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1565240048000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2361?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Queen Azshara',
                      id: 2361,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1565241146000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 8,
                total_count: 8,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2352?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Abyssal Commander Sivara',
                      id: 2352,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1579493384000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2347?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Blackwater Behemoth',
                      id: 2347,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1579493959000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2353?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Radiance of Azshara',
                      id: 2353,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1579494573000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2354?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lady Ashvane',
                      id: 2354,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1579494974000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2351?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Orgozoa',
                      id: 2351,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1579495360000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2359?namespace=static-8.3.0_32861-us',
                      },
                      name: "The Queen's Court",
                      id: 2359,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1579495856000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2349?namespace=static-8.3.0_32861-us',
                      },
                      name: "Za'qul, Harbinger of Ny'alotha",
                      id: 2349,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1579496412000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2361?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Queen Azshara',
                      id: 2361,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1579497313000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'IN_PROGRESS',
                name: 'In Progress',
              },
              progress: {
                completed_count: 6,
                total_count: 8,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2352?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Abyssal Commander Sivara',
                      id: 2352,
                    },
                    completed_count: 13,
                    last_kill_timestamp: 1579489882000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2347?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Blackwater Behemoth',
                      id: 2347,
                    },
                    completed_count: 12,
                    last_kill_timestamp: 1579490752000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2353?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Radiance of Azshara',
                      id: 2353,
                    },
                    completed_count: 14,
                    last_kill_timestamp: 1579492017000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2354?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Lady Ashvane',
                      id: 2354,
                    },
                    completed_count: 11,
                    last_kill_timestamp: 1579492661000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2351?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Orgozoa',
                      id: 2351,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1569299604000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2359?namespace=static-8.3.0_32861-us',
                      },
                      name: "The Queen's Court",
                      id: 2359,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1568089843000,
                  },
                ],
              },
            },
          ],
        },
        {
          instance: {
            key: {
              href:
                'https://us.api.blizzard.com/data/wow/journal-instance/1180?namespace=static-8.3.0_32861-us',
            },
            name: "Ny'alotha, the Waking City",
            id: 1180,
          },
          modes: [
            {
              difficulty: {
                type: 'NORMAL',
                name: 'Normal',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 12,
                total_count: 12,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2368?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Wrathion, the Black Emperor',
                      id: 2368,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1583806154000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2365?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Maut',
                      id: 2365,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1583807486000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2369?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Prophet Skitra',
                      id: 2369,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1583808175000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2377?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Dark Inquisitor Xanesh',
                      id: 2377,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1583810348000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2372?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Hivemind',
                      id: 2372,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1583811688000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2367?namespace=static-8.3.0_32861-us',
                      },
                      name: "Shad'har the Insatiable",
                      id: 2367,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1583813169000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2373?namespace=static-8.3.0_32861-us',
                      },
                      name: "Drest'agath",
                      id: 2373,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1583813810000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2374?namespace=static-8.3.0_32861-us',
                      },
                      name: "Il'gynoth, Corruption Reborn",
                      id: 2374,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1583814342000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2370?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Vexiona',
                      id: 2370,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1583811225000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2364?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ra-den the Despoiled',
                      id: 2364,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1583812490000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2366?namespace=static-8.3.0_32861-us',
                      },
                      name: "Carapace of N'Zoth",
                      id: 2366,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1583816398000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2375?namespace=static-8.3.0_32861-us',
                      },
                      name: "N'Zoth the Corruptor",
                      id: 2375,
                    },
                    completed_count: 5,
                    last_kill_timestamp: 1583816988000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'HEROIC',
                name: 'Heroic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 12,
                total_count: 12,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2368?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Wrathion, the Black Emperor',
                      id: 2368,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1592446419000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2365?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Maut',
                      id: 2365,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1592447463000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2369?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Prophet Skitra',
                      id: 2369,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1592446905000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2377?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Dark Inquisitor Xanesh',
                      id: 2377,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1592450263000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2372?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Hivemind',
                      id: 2372,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1592451063000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2367?namespace=static-8.3.0_32861-us',
                      },
                      name: "Shad'har the Insatiable",
                      id: 2367,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1592449188000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2373?namespace=static-8.3.0_32861-us',
                      },
                      name: "Drest'agath",
                      id: 2373,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1592448739000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2374?namespace=static-8.3.0_32861-us',
                      },
                      name: "Il'gynoth, Corruption Reborn",
                      id: 2374,
                    },
                    completed_count: 8,
                    last_kill_timestamp: 1592449762000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2370?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Vexiona',
                      id: 2370,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1592450728000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2364?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ra-den the Despoiled',
                      id: 2364,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1592451569000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2366?namespace=static-8.3.0_32861-us',
                      },
                      name: "Carapace of N'Zoth",
                      id: 2366,
                    },
                    completed_count: 10,
                    last_kill_timestamp: 1592452433000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2375?namespace=static-8.3.0_32861-us',
                      },
                      name: "N'Zoth the Corruptor",
                      id: 2375,
                    },
                    completed_count: 11,
                    last_kill_timestamp: 1592453530000,
                  },
                ],
              },
            },
            {
              difficulty: {
                type: 'MYTHIC',
                name: 'Mythic',
              },
              status: {
                type: 'COMPLETE',
                name: 'Complete',
              },
              progress: {
                completed_count: 12,
                total_count: 12,
                encounters: [
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2368?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Wrathion, the Black Emperor',
                      id: 2368,
                    },
                    completed_count: 11,
                    last_kill_timestamp: 1588558180000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2365?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Maut',
                      id: 2365,
                    },
                    completed_count: 11,
                    last_kill_timestamp: 1588559456000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2369?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Prophet Skitra',
                      id: 2369,
                    },
                    completed_count: 11,
                    last_kill_timestamp: 1588558734000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2377?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Dark Inquisitor Xanesh',
                      id: 2377,
                    },
                    completed_count: 4,
                    last_kill_timestamp: 1588649406000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2372?namespace=static-8.3.0_32861-us',
                      },
                      name: 'The Hivemind',
                      id: 2372,
                    },
                    completed_count: 9,
                    last_kill_timestamp: 1588569058000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2367?namespace=static-8.3.0_32861-us',
                      },
                      name: "Shad'har the Insatiable",
                      id: 2367,
                    },
                    completed_count: 7,
                    last_kill_timestamp: 1588561013000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2373?namespace=static-8.3.0_32861-us',
                      },
                      name: "Drest'agath",
                      id: 2373,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1588562001000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2374?namespace=static-8.3.0_32861-us',
                      },
                      name: "Il'gynoth, Corruption Reborn",
                      id: 2374,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1588567940000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2370?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Vexiona',
                      id: 2370,
                    },
                    completed_count: 2,
                    last_kill_timestamp: 1589167151000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2364?namespace=static-8.3.0_32861-us',
                      },
                      name: 'Ra-den the Despoiled',
                      id: 2364,
                    },
                    completed_count: 3,
                    last_kill_timestamp: 1588647004000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2366?namespace=static-8.3.0_32861-us',
                      },
                      name: "Carapace of N'Zoth",
                      id: 2366,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1589857873000,
                  },
                  {
                    encounter: {
                      key: {
                        href:
                          'https://us.api.blizzard.com/data/wow/journal-encounter/2375?namespace=static-8.3.0_32861-us',
                      },
                      name: "N'Zoth the Corruptor",
                      id: 2375,
                    },
                    completed_count: 1,
                    last_kill_timestamp: 1594008721000,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
})

export default CharacterRaidsMock
