import Service from '@ember/service';

export default class DatabaseService extends Service {
  teams = [
    {
      id: 1,
      name: 'Platform',
      players: [
        {
          id: 11,
          name: 'Santhosh',
        },
        {
          id: 12,
          name: 'Guhapriya',
        },
      ],
    },
    {
      id: 2,
      name: 'Billing',
      players: [
        {
          id: 21,
          name: 'Melvin',
        },
        {
          id: 22,
          name: 'Ishwarya',
        },
      ],
    },
    {
      id: 3,
      name: 'Invoice',
      players: [
        {
          id: 31,
          name: 'Priyalakshmi',
        },
        {
          id: 32,
          name: 'Shobika',
        },
      ],
    },
  ];

  matches = [
    {
      id: 101,
      team1_id: 1,
      team1_name: 'Platform',
      team2_id: 2,
      team2_name: 'Billing',
      no: 1,
      venue: 'Kappalur Zoho',
      date: '2024-03-22',
      time: '05:00 PM',
    },
    {
      id: 102,
      team1_id: 1,
      team1_name: 'Platform',
      team2_id: 3,
      team2_name: 'Invoice',
      no: 2,
      venue: 'Chennai Zoho',
      date: '2024-03-23',
      time: '05:00 PM',
    },
    {
      id: 103,
      team1_id: 2,
      team1_name: 'Billing',
      team2_id: 3,
      team2_name: 'Invoice',
      no: 3,
      venue: 'Tenkasi Zoho',
      date: '2024-03-24',
      time: '05:00 PM',
    },
  ];

  players = [
    {
      id: 11,
      name: 'Santhosh',
      role: 'Defender',
      matches: 5,
      stats: {
        won: 3,
        lose: 2,
      },
    },
    {
      id: 12,
      name: 'Guhapriya',
      role: 'Attacker',
      matches: 5,
      stats: {
        won: 3,
        lose: 2,
      },
    },
    {
      id: 21,
      name: 'Melvin',
      role: 'Defender',
      matches: 5,
      stats: {
        won: 2,
        lose: 3,
      },
    },
    {
      id: 22,
      name: 'Ishwarya',
      role: 'Attacker',
      matches: 5,
      stats: {
        won: 2,
        lose: 3,
      },
    },
    {
      id: 31,
      name: 'Priyalakshmi',
      role: 'Defender',
      matches: 5,
      stats: {
        won: 4,
        lose: 1,
      },
    },
    {
      id: 32,
      name: 'Shobika',
      role: 'Attacker',
      matches: 5,
      stats: {
        won: 4,
        lose: 1,
      },
    },
  ];
}
