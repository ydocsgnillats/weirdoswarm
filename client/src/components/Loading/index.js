import "./style.scss";

function Loading(props) {
  return (
    <div className="loading">
      {props.text && <div className="loading-text">Loading</div>}
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="256.000000pt"
        height="256.000000pt"
        viewBox="0 0 256.000000 256.000000"
        preserveAspectRatio="xMidYMid meet"
        className="nonagon"
      >
        <g
          transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
          fill="red"
          stroke="none"
        >
          <path
            d="M1374 2525 c-11 -15 -81 -27 -89 -15 -8 13 -45 0 -45 -16 0 -10 -14
-14 -49 -14 -27 0 -51 -5 -53 -11 -4 -13 -212 -60 -281 -64 -27 -1 -56 -10
-66 -19 -10 -9 -26 -16 -36 -16 -10 0 -41 -7 -69 -15 -28 -8 -73 -17 -99 -20
-39 -5 -50 -11 -57 -31 -5 -13 -17 -27 -25 -31 -9 -3 -14 -11 -11 -19 3 -7 -2
-18 -10 -24 -8 -7 -14 -19 -14 -27 0 -10 -7 -14 -19 -10 -15 4 -20 -2 -25 -27
-3 -17 -15 -39 -25 -48 -10 -9 -38 -44 -62 -78 -33 -45 -48 -60 -62 -56 -13 3
-17 0 -13 -10 7 -17 -6 -44 -34 -77 -10 -12 -28 -33 -39 -46 -12 -13 -21 -30
-21 -38 0 -7 -7 -13 -15 -13 -8 0 -15 -6 -15 -13 0 -8 -9 -22 -20 -32 -11 -10
-20 -22 -20 -27 0 -5 -14 -26 -30 -47 -30 -37 -30 -38 -25 -132 3 -52 8 -146
11 -209 2 -63 11 -168 19 -232 8 -64 15 -164 15 -223 l0 -106 38 -38 c100
-101 108 -111 92 -122 -13 -9 -12 -10 2 -5 12 3 40 -17 93 -68 41 -41 75 -78
75 -83 0 -5 13 -17 30 -26 16 -10 33 -29 36 -43 3 -13 11 -24 18 -24 21 0 76
-58 70 -74 -3 -9 5 -21 23 -33 15 -9 32 -23 36 -30 4 -7 14 -13 21 -13 7 0 25
-18 40 -40 27 -41 35 -45 121 -55 28 -3 106 -13 175 -21 69 -8 178 -18 244
-23 87 -5 121 -11 130 -22 9 -12 28 -14 90 -11 58 3 81 1 87 -9 8 -14 8 -14
104 38 16 9 38 24 49 35 11 10 27 18 36 18 9 0 25 9 34 19 9 10 37 31 62 47
24 15 44 32 44 36 0 4 7 8 15 8 8 0 23 7 33 15 31 29 173 125 183 125 5 0 9 4
9 10 0 5 11 12 25 16 14 3 25 10 25 14 0 5 25 18 55 31 30 12 57 30 60 39 3 9
17 23 30 30 14 7 25 22 25 32 0 11 5 29 11 40 6 11 13 35 16 52 3 17 9 39 14
48 5 9 9 25 9 35 0 10 7 31 15 47 8 15 15 35 15 43 0 20 29 110 46 146 8 16
14 39 14 52 0 13 11 47 25 77 14 29 25 68 25 86 0 18 4 40 9 50 19 33 41 117
38 142 -2 14 -18 48 -35 75 -17 28 -32 58 -32 68 0 20 -25 70 -49 100 -8 9
-11 20 -8 23 4 4 -2 19 -13 34 -11 16 -20 35 -20 43 0 9 -6 28 -14 44 -8 15
-26 52 -40 81 -20 40 -24 57 -16 67 8 9 5 14 -10 18 -11 3 -20 13 -20 22 0 9
-7 29 -15 43 -21 39 -55 119 -55 130 0 16 -67 62 -90 62 -19 0 -29 6 -65 38
-7 6 -20 12 -28 12 -8 0 -20 7 -27 15 -7 8 -18 15 -26 15 -15 0 -112 46 -199
95 -33 18 -67 34 -76 34 -9 1 -22 8 -29 16 -7 8 -21 15 -32 15 -10 0 -21 7
-24 15 -4 8 -16 15 -29 15 -13 0 -25 7 -29 15 -3 8 -17 15 -32 15 -24 0 -26 3
-20 30 3 17 1 30 -4 30 -6 0 -10 -7 -10 -16 0 -17 -12 -16 -76 4 -23 7 -33 6
-40 -3z m-99 -115 c3 -5 -1 -10 -10 -10 -10 0 -34 -14 -55 -30 -25 -20 -47
-29 -62 -27 -13 2 -17 2 -10 0 29 -10 11 -26 -78 -68 -32 -15 -39 -15 -86 -1
-30 10 -87 16 -139 16 -109 0 -103 12 20 40 50 12 108 26 130 31 22 6 60 15
85 20 25 5 74 16 110 23 82 18 88 18 95 6z m337 -44 c10 -7 14 -17 10 -21 -4
-5 -1 -5 6 -1 7 4 28 1 47 -8 25 -12 32 -21 28 -36 -6 -21 6 -27 23 -10 7 7
42 -6 109 -40 53 -27 103 -50 109 -50 7 0 27 -11 46 -25 43 -32 29 -32 -111
-5 -57 11 -110 19 -119 18 -19 -3 -76 50 -72 67 2 9 -5 11 -19 8 -18 -5 -20
-3 -14 15 5 17 3 21 -8 16 -11 -4 -19 6 -28 30 -10 27 -18 35 -30 31 -10 -3
-19 1 -23 10 -7 19 22 20 46 1z m-200 -108 c-16 -16 -20 5 -8 42 l10 35 4 -34
c2 -18 -1 -38 -6 -43z m63 62 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10
4 10 3 0 8 -4 11 -10z m-145 -44 c0 -22 -26 -43 -38 -31 -8 8 16 55 28 55 5 0
10 -11 10 -24z m-100 4 c0 -15 -37 -31 -56 -23 -16 6 -16 7 2 20 21 15 54 17
54 3z m274 -22 c21 -42 20 -50 -6 -46 -19 2 -24 10 -26 41 -4 45 11 48 32 5z
m106 -30 c0 -16 -3 -16 -20 -6 -11 7 -20 24 -20 37 0 23 1 24 20 6 11 -10 20
-26 20 -37z m-746 -5 c3 -4 30 -6 59 -5 l52 3 -25 -20 c-14 -11 -36 -21 -50
-23 -27 -3 -120 31 -120 44 0 10 74 11 84 1z m-323 -56 c-16 -32 -41 -108 -46
-137 -2 -14 -9 -46 -16 -73 -11 -41 -15 -46 -33 -41 -16 4 -17 3 -7 -4 20 -14
6 -45 -17 -38 -13 5 -22 -1 -30 -19 -6 -14 -18 -25 -26 -25 -8 0 -19 -8 -25
-17 -8 -15 -13 -16 -30 -5 -25 15 -41 16 -41 2 0 -5 9 -10 20 -10 11 0 20 -4
20 -10 0 -5 -7 -10 -16 -10 -8 0 -33 -14 -54 -31 -55 -44 -65 -32 -22 25 20
27 42 56 47 66 25 42 66 82 80 77 9 -4 12 -1 9 8 -4 10 1 12 18 9 23 -5 23 -5
3 11 -14 12 -16 19 -7 22 6 3 12 13 12 24 0 10 4 19 9 19 5 0 30 28 56 63 26
34 53 66 61 70 8 4 14 15 14 23 0 19 24 46 29 32 2 -5 -2 -20 -8 -31z m543 30
c-4 -10 3 -12 26 -9 38 5 40 -14 5 -52 -14 -15 -25 -36 -25 -47 0 -10 -7 -19
-15 -19 -9 0 -15 9 -15 21 0 18 -5 20 -27 16 -29 -5 -77 19 -67 35 3 5 16 14
27 19 12 6 38 19 57 29 43 23 40 23 34 7z m200 -13 c9 -3 13 -10 10 -15 -3 -5
-9 -7 -13 -5 -4 3 -6 -19 -3 -49 4 -51 3 -55 -17 -55 -23 0 -27 -10 -11 -26
13 -13 2 -44 -15 -44 -7 0 -15 7 -19 15 -3 8 -13 15 -23 15 -19 1 -53 23 -53
35 0 4 21 36 47 71 45 61 62 71 97 58z m129 -37 c8 7 11 -50 8 -122 -4 -64
-24 -88 -65 -79 -46 9 -51 18 -38 64 7 22 17 59 24 83 14 46 37 71 54 56 6 -5
14 -6 17 -2z m138 -12 c1 -5 1 -15 0 -21 -1 -6 5 -17 13 -23 8 -6 12 -20 9
-30 -3 -14 0 -19 14 -18 13 2 18 -5 18 -23 0 -20 -5 -26 -30 -28 -16 -1 -40
-8 -52 -14 -13 -6 -25 -9 -28 -6 -6 6 -13 167 -8 172 8 8 63 0 64 -9z m-905
-12 c7 -10 14 -26 14 -37 0 -27 -26 -3 -33 29 -5 29 1 32 19 8z m179 7 c4 -6
-5 -10 -19 -10 -14 0 -26 5 -26 10 0 6 9 10 19 10 11 0 23 -4 26 -10z m891
-13 c11 -12 35 -33 52 -46 l31 -25 -26 -13 c-61 -32 -131 -2 -121 51 4 18 0
26 -14 29 -32 9 -19 25 19 25 25 0 45 -7 59 -21z m237 -13 c20 -4 37 -10 37
-14 0 -12 -84 -18 -91 -7 -4 6 -16 7 -28 4 -11 -3 -25 1 -32 9 -9 12 -4 14 32
14 24 0 61 -3 82 -6z m-1390 -149 c-10 -7 -19 -12 -21 -11 -3 4 18 106 26 126
4 8 8 -11 10 -44 2 -47 0 -61 -15 -71z m393 109 c-4 -12 -2 -15 9 -10 26 10
42 -4 43 -36 1 -31 -25 -77 -43 -78 -16 0 -36 38 -24 45 14 9 -10 37 -26 31
-17 -6 -55 21 -55 39 0 13 24 20 79 24 17 1 22 -3 17 -15z m934 2 c0 -11 -19
-15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16 -4z m-1221 -47 c-15 -9 -32 -2 -24 11
3 5 13 6 21 3 12 -4 13 -8 3 -14z m173 -51 c-1 -5 1 -7 6 -4 12 7 82 -69 82
-89 0 -19 -16 -20 -27 -1 -7 12 -10 12 -21 0 -11 -12 -10 -14 3 -14 8 0 15 -7
15 -15 0 -22 -42 -19 -68 5 -25 23 -27 31 -11 47 7 7 8 24 4 45 -7 31 -8 31
-16 11 -11 -30 -15 -29 -34 11 -14 29 -15 37 -3 49 11 13 17 11 43 -11 16 -14
29 -29 27 -34z m1158 52 c0 -5 -7 -10 -15 -10 -8 0 -15 -4 -15 -10 0 -5 -11
-10 -25 -10 -14 0 -25 5 -25 10 0 6 11 10 25 10 14 0 25 5 25 10 0 6 7 10 15
10 8 0 15 -4 15 -10z m-880 -30 c0 -5 11 -12 25 -16 31 -8 33 -24 3 -24 -21 0
-21 0 -2 -15 17 -12 20 -12 31 1 14 19 47 14 51 -7 2 -11 -6 -18 -25 -22 -15
-3 -54 -12 -86 -20 -31 -9 -68 -12 -81 -9 -22 6 -23 9 -11 26 8 10 18 15 23
12 6 -3 8 2 5 14 -3 12 4 28 22 45 29 26 45 32 45 15z m741 -20 c28 -16 23
-28 -18 -48 -21 -9 -40 -20 -43 -23 -8 -10 -70 -19 -70 -11 0 5 5 13 12 20 9
9 9 15 0 24 -9 9 -12 8 -12 -7 0 -14 -3 -16 -11 -8 -38 38 85 83 142 53z
m-1122 -63 c33 -68 38 -96 19 -101 -17 -4 -69 -22 -90 -31 -14 -5 -16 0 -14
37 1 24 -1 56 -6 72 -8 32 5 66 27 66 8 0 15 5 15 10 0 27 21 4 49 -53z m929
-9 c25 -48 27 -69 10 -86 -18 -18 -39 -15 -117 20 -58 26 -71 37 -71 55 0 22
3 24 73 38 9 2 23 -6 31 -16 11 -16 15 -17 19 -6 3 8 0 20 -6 26 -8 8 -5 11
14 11 18 0 29 -10 47 -42z m581 -41 c6 -6 11 -19 11 -28 0 -10 5 -19 12 -21 7
-3 12 -20 12 -40 0 -24 4 -34 12 -31 7 3 15 -9 19 -29 4 -18 18 -53 31 -78 43
-80 26 -94 -36 -29 -22 23 -42 50 -45 59 -3 10 -15 20 -25 23 -19 5 -20 14
-19 129 1 84 4 112 9 90 4 -19 13 -39 19 -45z m-173 41 c-3 -13 -6 -29 -6 -35
0 -7 -4 -13 -10 -13 -5 0 -10 7 -10 15 0 8 -5 15 -12 15 -6 0 -3 9 7 20 24 27
39 25 31 -2z m84 -26 c0 -7 -5 -10 -12 -6 -8 5 -9 0 -4 -17 15 -46 18 -79 8
-79 -20 0 -32 28 -26 61 13 78 15 84 25 68 5 -7 9 -20 9 -27z m-1565 -49 c7
-51 6 -52 -22 -58 -15 -3 -40 -10 -55 -14 -33 -11 -42 0 -33 37 7 29 86 105
96 94 4 -4 10 -30 14 -59z m1330 56 c9 -14 -13 -66 -31 -73 -8 -3 -14 -12 -14
-21 0 -8 -4 -15 -9 -15 -6 0 -16 -12 -23 -27 -18 -36 -32 -39 -46 -8 -10 21
-9 27 3 31 24 9 17 24 -10 24 -28 0 -32 12 -10 30 9 7 26 9 45 5 26 -6 30 -4
30 16 0 35 50 64 65 38z m-540 -29 c3 -5 17 -10 31 -10 23 0 24 -4 25 -57 1
-32 0 -62 -1 -68 -2 -5 -2 -22 -1 -38 1 -21 -5 -30 -26 -39 -16 -7 -46 -23
-68 -37 l-39 -24 -16 24 c-8 13 -28 38 -43 56 -27 31 -28 34 -15 69 7 20 18
39 25 41 9 4 9 9 0 24 -10 17 -9 22 5 30 10 5 15 16 12 24 -5 12 5 15 49 15
31 0 59 -4 62 -10z m-204 -82 c-11 -24 -20 -35 -21 -26 0 9 -14 28 -31 41 -39
31 -31 52 17 44 21 -4 37 -1 41 6 18 28 13 -25 -6 -65z m859 9 c0 -22 -4 -28
-15 -23 -12 4 -14 0 -9 -20 4 -15 0 -41 -11 -64 -17 -38 -19 -39 -44 -26 -14
8 -33 17 -43 20 -14 4 -15 10 -6 46 6 23 17 44 24 47 8 3 14 11 14 18 0 8 12
23 26 34 33 26 64 10 64 -32z m-502 3 c9 0 26 -7 36 -15 19 -14 19 -15 0 -22
-10 -4 -25 -13 -32 -20 -18 -17 -44 -5 -37 17 3 10 1 21 -5 25 -5 3 -10 15
-10 26 0 19 1 19 16 5 8 -9 23 -16 32 -16z m-454 -47 c62 -64 66 -70 61 -103
-4 -19 -11 -39 -16 -45 -5 -5 -9 -19 -9 -32 0 -19 -5 -23 -30 -23 -17 0 -47 7
-67 15 -19 8 -44 15 -55 15 -16 0 -18 5 -12 35 4 23 2 35 -5 35 -6 0 -11 -4
-11 -10 0 -5 -5 -10 -11 -10 -8 0 -10 12 -6 36 5 29 3 35 -8 30 -25 -9 -32 44
-9 61 10 8 18 20 16 27 -1 8 7 11 26 8 18 -2 33 2 41 12 8 9 17 16 21 16 4 0
37 -30 74 -67z m-670 32 c7 -20 -3 -45 -18 -45 -8 0 -11 11 -8 30 5 32 16 39
26 15z m397 -21 c11 -14 9 -19 -14 -36 -15 -11 -27 -29 -27 -40 0 -11 -8 -22
-20 -25 -11 -3 -20 -11 -20 -17 0 -24 -25 -47 -43 -40 -20 7 -24 69 -4 78 8 3
7 8 -5 16 -37 23 -15 50 41 50 15 0 36 7 47 15 24 18 29 18 45 -1z m-441 -4
c0 -5 -5 -10 -11 -10 -5 0 -8 -4 -5 -9 7 -11 -47 -34 -71 -29 -13 3 -7 10 27
31 49 29 60 32 60 17z m1306 -25 c4 -8 17 -15 30 -15 14 0 27 -7 30 -15 4 -8
12 -15 20 -15 31 0 7 -57 -48 -113 -16 -16 -28 -34 -28 -40 0 -7 -12 -20 -25
-30 -21 -15 -36 -17 -85 -11 l-60 7 0 42 c0 24 -3 50 -6 59 -7 17 59 84 126
128 32 21 39 22 46 3z m458 -22 c31 -33 36 -45 36 -85 0 -27 -3 -48 -6 -48 -3
0 -27 7 -55 16 -44 15 -49 19 -49 46 0 16 7 42 15 58 9 17 13 30 10 30 -4 0
-3 5 0 10 9 14 10 14 49 -27z m-1534 -23 c-5 -18 -5 -32 1 -35 5 -4 9 -15 9
-27 0 -16 -4 -18 -17 -12 -10 4 -48 10 -85 12 -57 3 -68 6 -68 22 0 9 7 23 15
30 19 16 92 38 127 39 25 1 26 -1 18 -29z m275 -77 c6 -31 5 -33 -19 -33 -14
0 -26 5 -26 10 0 6 -9 10 -20 10 -19 0 -19 2 6 40 24 37 28 39 39 23 7 -10 16
-33 20 -50z m-491 42 c-4 -8 -10 -12 -15 -9 -14 8 -10 24 6 24 9 0 12 -6 9
-15z m1496 -31 c0 -12 -4 -12 -20 -4 -11 6 -20 17 -20 26 0 12 4 12 20 4 11
-6 20 -17 20 -26z m-645 -21 c37 -41 32 -53 -20 -53 -25 0 -45 5 -45 10 0 6 5
10 10 10 6 0 10 14 10 30 0 37 12 38 45 3z m715 -4 c0 -5 -9 -9 -21 -9 -11 0
-18 -4 -14 -10 3 -6 15 -5 30 2 14 6 27 9 29 7 7 -6 -27 -106 -40 -119 -9 -9
-13 -2 -18 24 -4 20 -10 36 -15 36 -8 0 -31 44 -31 60 0 6 9 10 19 10 11 0 22
4 26 10 7 11 35 2 35 -11z m-500 -46 c0 -34 -1 -35 -31 -29 -16 3 -39 12 -50
20 -19 13 -18 14 22 34 23 12 46 19 51 16 4 -3 8 -21 8 -41z m839 -7 c34 -51
31 -63 -11 -38 -38 22 -66 71 -47 83 17 10 23 6 58 -45z m-1939 35 c0 -18 -18
-21 -30 -6 -10 13 -9 15 9 15 11 0 21 -4 21 -9z m1478 -39 c27 -79 31 -72 -37
-72 -72 0 -78 13 -31 67 17 18 30 38 30 43 0 22 26 -4 38 -38z m-1354 20 c2
-4 34 -7 70 -5 73 3 70 6 60 -71 -7 -51 -18 -56 -58 -25 -14 11 -26 17 -26 12
0 -4 -7 1 -16 12 -8 11 -24 20 -37 21 -58 3 -82 25 -55 52 13 13 54 16 62 4z
m-257 -8 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m1848 -4 c3
-5 3 -10 -2 -10 -4 0 -8 -16 -9 -35 0 -19 3 -35 8 -35 4 0 8 16 8 35 0 41 19
46 49 14 11 -12 24 -18 30 -14 19 11 33 -5 20 -22 -10 -12 -10 -16 2 -24 11
-7 10 -9 -6 -10 -17 -1 -17 -2 -2 -6 9 -2 15 -8 13 -12 -3 -4 -39 -2 -82 4
-65 9 -78 14 -85 32 -16 44 34 118 56 83z m-1190 -30 c11 -4 28 -11 37 -14 14
-4 16 -12 12 -35 -5 -24 -3 -29 12 -28 12 2 20 -9 26 -32 8 -30 7 -37 -14 -54
-13 -10 -41 -27 -63 -37 -35 -17 -42 -17 -56 -4 -8 8 -21 14 -28 14 -26 0
-112 64 -117 87 -5 16 2 37 22 66 16 23 33 45 37 48 11 8 106 0 132 -11z
m-580 -6 c24 -16 33 -48 17 -58 -8 -5 -21 8 -61 57 -12 15 -11 17 3 17 9 0 28
-7 41 -16z m795 -39 c0 -6 -13 -22 -29 -36 l-28 -25 -22 38 c-11 20 -21 39
-21 42 0 3 15 6 33 8 34 3 67 -10 67 -27z m-951 -20 c6 -3 11 -15 11 -26 0
-10 5 -19 10 -19 6 0 10 -14 10 -30 0 -18 6 -33 15 -36 8 -4 15 -14 15 -24 0
-10 6 -23 14 -29 29 -24 28 -124 -3 -196 -12 -28 -28 -84 -36 -124 -6 -26 -9
-31 -16 -19 -8 15 -29 241 -30 322 -1 51 -7 139 -14 191 -4 30 -3 35 4 19 5
-12 14 -25 20 -29z m2231 15 c0 -5 -7 -7 -15 -4 -8 4 -12 10 -9 15 6 11 24 2
24 -11z m-984 -36 c22 -20 47 -43 56 -52 13 -11 16 -24 12 -52 -4 -23 -2 -40
5 -44 20 -13 11 -42 -23 -75 -19 -18 -36 -46 -40 -62 -3 -16 -10 -29 -16 -29
-6 0 -18 -7 -26 -15 -25 -25 -81 -18 -132 16 -25 17 -56 35 -69 40 -13 5 -27
19 -32 31 -27 73 -28 87 -15 139 36 137 186 192 280 103z m-939 -11 c6 -8 17
-13 25 -12 7 1 28 -4 46 -12 l34 -14 -42 -51 -41 -51 -50 48 c-49 47 -56 67
-43 117 6 22 7 22 33 6 14 -9 31 -23 38 -31z m1112 16 c34 -12 40 -33 14 -61
-20 -22 -33 -23 -33 -3 0 8 -4 15 -10 15 -5 0 -10 14 -10 30 0 17 2 30 4 30 1
0 17 -5 35 -11z m741 -9 c19 -15 21 -20 8 -20 -26 0 -68 18 -68 30 0 16 33 11
60 -10z m-2033 -28 c16 -22 19 -36 14 -67 l-6 -40 -28 63 c-31 73 -31 72 -14
72 7 0 23 -13 34 -28z m1508 4 c103 -11 123 -16 128 -30 5 -14 -13 -80 -26
-92 -4 -4 -7 -19 -8 -33 0 -14 -3 -20 -6 -13 -3 9 -13 5 -35 -13 -44 -37 -112
-35 -155 5 -18 16 -33 37 -33 46 0 9 -9 18 -20 21 -26 7 -25 19 5 49 14 14 25
30 25 36 0 23 32 48 49 39 9 -5 43 -12 76 -15z m320 -34 c44 -2 83 -8 86 -14
21 -33 -35 -78 -96 -78 -17 0 -35 -4 -41 -10 -14 -14 -29 0 -53 48 -25 49 -22
79 7 66 9 -5 53 -10 97 -12z m169 -46 c-5 -13 -9 -14 -14 -5 -11 16 0 43 12
31 5 -5 6 -17 2 -26z m-1634 -75 c0 -73 -3 -100 -13 -104 -14 -5 -51 29 -82
76 -17 27 -17 28 1 47 10 10 30 33 44 50 42 52 50 41 50 -69z m1705 89 c4 -6
-5 -10 -20 -10 -15 0 -24 4 -20 10 3 6 12 10 20 10 8 0 17 -4 20 -10z m-1966
-49 c7 -15 23 -33 37 -39 29 -14 30 -27 4 -49 -11 -10 -20 -22 -20 -27 0 -5
-7 -14 -17 -21 -13 -10 -20 -8 -36 8 -17 17 -18 27 -12 80 9 87 23 101 44 48z
m350 16 c6 -8 7 -17 3 -22 -4 -4 2 -5 13 -2 17 5 66 -18 54 -26 -2 -1 -21 -15
-42 -31 -21 -15 -40 -26 -41 -25 -2 2 -6 30 -10 62 -6 56 1 70 23 44z m292
-58 c-5 -23 -9 -30 -15 -21 -4 7 -19 17 -32 22 -33 13 -30 32 9 50 29 13 33
13 39 -1 3 -9 3 -31 -1 -50z m569 -2 c0 -8 11 -24 25 -37 31 -29 31 -32 -3
-50 -56 -32 -95 10 -66 69 16 31 44 42 44 18z m710 9 c0 -2 -9 -6 -20 -9 -11
-3 -20 -1 -20 4 0 5 9 9 20 9 11 0 20 -2 20 -4z m-90 -37 c0 -18 -37 -55 -46
-46 -6 6 -24 -6 -51 -35 -20 -21 -37 -6 -48 40 -5 27 -4 32 12 32 10 0 29 6
43 14 35 18 90 16 90 -5z m168 12 c-1 -4 -24 -32 -50 -61 -36 -39 -49 -48 -54
-37 -10 28 1 52 25 55 14 2 33 15 44 28 18 23 42 34 35 15z m-1452 -26 c61
-32 73 -50 63 -89 -18 -71 -30 -104 -42 -113 -17 -14 -126 -38 -134 -30 -3 4
-13 1 -21 -5 -12 -10 -20 -5 -46 27 -24 30 -31 49 -32 87 -1 34 3 48 13 48 7
0 27 14 45 30 17 17 37 29 44 26 6 -2 17 6 24 20 17 30 28 30 86 -1z m1492
-58 c-18 -50 -41 -125 -58 -187 -7 -25 -19 -59 -26 -77 -8 -17 -17 -45 -20
-62 -4 -17 -10 -34 -15 -37 -14 -8 -19 35 -16 138 2 99 10 118 58 155 9 7 20
25 23 39 4 15 18 36 32 46 13 11 24 27 25 36 0 12 2 13 6 4 3 -8 -1 -32 -9
-55z m-410 3 c20 -66 16 -79 -30 -100 -24 -11 -51 -25 -61 -32 -14 -11 -19
-10 -27 2 -14 22 -12 53 3 47 8 -3 13 9 14 40 3 53 14 70 51 76 15 2 29 5 32
6 3 0 11 -17 18 -39z m-1459 -36 c9 -21 8 -23 -12 -21 -12 1 -22 -3 -22 -10 0
-15 -35 -42 -54 -43 -8 0 -20 -8 -27 -17 -12 -17 -14 -17 -28 2 -18 23 -20 35
-6 35 6 0 10 7 10 15 0 9 7 18 15 21 8 4 15 13 15 21 0 10 6 12 20 8 17 -5 20
-2 20 25 l0 31 29 -22 c16 -11 34 -32 40 -45z m1294 6 c-12 -26 -17 -28 -34
-17 -34 21 -26 41 19 44 30 2 30 2 15 -27z m-732 -37 l18 -43 -27 -6 c-15 -3
-35 -9 -44 -15 -30 -16 -37 -11 -27 24 4 17 11 45 14 60 9 44 44 33 66 -20z
m662 -25 c37 -36 37 -86 0 -136 -16 -20 -32 -40 -37 -43 -10 -7 -121 45 -131
62 -4 5 -17 14 -30 19 -29 11 -41 84 -19 118 15 22 54 31 54 11 0 -6 19 0 43
14 l42 24 25 -21 c14 -11 37 -33 53 -48z m-1463 43 c15 -28 12 -61 -5 -67 -8
-4 -15 -12 -15 -20 0 -8 -7 -14 -15 -14 -20 0 -19 26 1 34 13 5 15 15 11 46
-5 43 6 53 23 21z m1902 -33 c-1 -79 0 -78 -29 -78 -14 0 -35 7 -45 17 -19 17
-25 53 -8 53 6 0 10 7 10 15 0 13 59 47 69 39 2 -2 3 -22 3 -46z m-728 -30 c9
-44 -4 -52 -39 -23 -30 23 -30 24 -10 39 30 23 42 19 49 -16z m-844 -19 c19
-19 30 -40 28 -52 -4 -26 -84 -69 -115 -62 -12 3 -34 0 -49 -7 -22 -10 -28
-10 -32 0 -2 7 -10 19 -18 26 -8 8 -14 18 -13 23 0 11 98 73 114 73 7 0 15 7
19 15 9 23 32 18 66 -16z m660 -8 c0 -5 -7 -16 -15 -25 -8 -8 -15 -19 -15 -25
0 -6 -9 -11 -20 -11 -15 0 -20 7 -20 29 0 16 6 32 13 34 21 9 57 7 57 -2z
m778 -24 c2 -15 7 -27 12 -27 8 0 30 -53 30 -71 0 -5 -9 -18 -21 -30 l-21 -21
-12 23 c-6 13 -20 26 -31 28 -11 2 -35 18 -53 37 l-32 33 39 21 c22 11 43 25
46 30 12 20 40 5 43 -23z m-904 -35 c27 -59 4 -162 -36 -162 -10 0 -18 -7 -18
-17 0 -23 -41 -81 -62 -86 -27 -7 -98 75 -98 113 0 33 27 127 42 147 5 6 36
14 68 18 33 4 63 11 66 16 10 17 21 9 38 -29z m228 21 c2 -5 21 -18 43 -30 36
-20 40 -26 41 -61 0 -21 3 -43 6 -48 10 -18 7 -88 -4 -102 -7 -7 -31 -27 -55
-43 -35 -24 -46 -28 -63 -19 -11 6 -20 17 -20 25 0 8 -8 23 -19 34 -16 16 -34
71 -35 111 -1 8 -4 20 -9 27 -4 6 -2 15 5 20 7 4 20 22 30 38 20 37 71 67 80
48z m-1085 -35 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m603 -40
c-5 -18 -10 -42 -12 -52 -3 -16 -9 -13 -42 20 -38 38 -39 39 -15 42 13 2 28 8
34 13 5 5 17 9 26 9 15 0 16 -5 9 -32z m-520 -6 c0 -21 -30 -38 -87 -47 l-38
-7 30 27 c16 14 37 24 47 22 9 -3 19 1 22 9 8 20 26 17 26 -4z m1540 -13 c24
-25 28 -34 19 -45 -8 -9 -8 -14 -1 -14 6 0 14 5 18 11 4 7 17 0 35 -17 33 -32
33 -32 14 -58 -14 -18 -16 -18 -79 13 -36 18 -68 36 -71 41 -4 6 -17 10 -31
10 -19 0 -24 5 -24 26 0 30 35 63 67 64 12 0 35 -14 53 -31z m277 2 c-1 -16
-5 -27 -9 -24 -11 6 -10 53 2 53 5 0 8 -13 7 -29z m-1424 -28 c15 -21 40 -47
57 -58 30 -20 41 -57 20 -70 -5 -3 -10 -22 -10 -41 0 -19 -4 -34 -10 -34 -5 0
-10 -11 -10 -25 0 -14 -11 -36 -24 -48 -19 -18 -21 -25 -12 -39 7 -12 7 -21 0
-28 -8 -8 -19 -3 -37 16 -26 26 -27 30 -27 148 -1 66 -5 140 -9 163 -8 42 -4
50 25 52 6 1 23 -16 37 -36z m805 18 c9 -5 25 -12 35 -15 21 -7 23 -36 2 -36
-8 0 -15 5 -15 11 0 5 -5 7 -11 4 -6 -4 -8 -13 -5 -20 4 -11 -32 -55 -46 -55
-3 0 -6 27 -7 60 -1 63 7 72 47 51z m-908 -239 c7 -41 10 -76 7 -78 -2 -2 -25
7 -51 22 -37 21 -51 37 -72 82 -14 32 -37 79 -50 105 -27 56 -31 75 -10 58 10
-9 16 -8 26 4 7 8 20 15 29 15 9 0 21 4 27 9 5 5 23 11 39 13 l30 3 7 -80 c4
-44 12 -113 18 -153z m1484 152 c10 -25 16 -47 13 -50 -5 -5 -67 51 -67 61 0
7 23 34 30 35 3 0 13 -21 24 -46z m-1724 -4 c0 -10 -7 -23 -16 -28 -15 -8 -15
-10 0 -15 9 -4 19 1 25 11 9 16 10 15 16 -3 4 -11 13 -32 21 -47 8 -14 14 -36
14 -49 0 -21 -1 -21 -18 -6 -10 10 -26 17 -35 17 -9 0 -17 5 -17 10 0 6 -5 10
-11 10 -7 0 -34 14 -61 30 -26 17 -59 30 -72 30 -13 0 -29 7 -36 15 -10 12 -7
15 16 21 15 4 35 2 45 -4 12 -8 20 -8 24 -2 3 6 1 10 -4 10 -6 0 -11 5 -11 10
0 6 27 10 60 10 53 0 60 -2 60 -20z m829 -80 c4 -3 13 -21 20 -40 11 -32 10
-36 -19 -60 -16 -14 -30 -30 -30 -36 0 -11 -42 -34 -62 -34 -5 0 -7 7 -4 16 5
12 1 14 -16 9 -18 -6 -20 -4 -15 14 4 16 1 21 -14 21 -17 0 -19 5 -13 38 3 20
18 54 33 75 14 21 31 46 36 55 6 9 17 22 25 28 13 10 18 5 33 -34 10 -26 22
-49 26 -52z m471 90 c0 -5 -4 -10 -8 -10 -8 0 -26 -59 -39 -125 -3 -16 -12
-39 -19 -50 -8 -11 -14 -27 -14 -37 0 -27 -33 -128 -42 -128 -4 0 -8 5 -8 12
0 6 -9 0 -20 -13 l-21 -23 2 69 c2 40 -3 80 -9 92 -7 12 -12 39 -12 61 0 35 3
41 26 46 19 5 24 10 16 18 -13 13 3 30 62 69 41 28 86 37 86 19z m68 -51 c-4
-25 -1 -29 21 -29 23 0 24 1 6 13 -28 21 -1 31 35 12 16 -8 30 -19 30 -24 0
-5 11 -12 25 -15 34 -9 32 -24 -10 -71 -19 -22 -35 -45 -35 -52 0 -7 -6 -16
-13 -20 -8 -4 -22 -20 -32 -35 -9 -16 -26 -28 -36 -28 -11 0 -28 -5 -38 -12
-47 -29 -65 18 -34 88 9 22 15 49 14 61 -1 11 3 24 8 28 6 3 11 17 11 30 0 13
5 27 10 30 6 3 10 16 10 29 0 26 9 38 22 30 6 -4 8 -19 6 -35z m296 -34 c16
-24 16 -25 -10 -14 -38 14 -45 19 -39 30 11 16 32 10 49 -16z m-1141 -45 c14
0 37 -28 37 -44 0 -9 -9 -25 -20 -36 -11 -11 -20 -25 -20 -31 0 -20 -55 -69
-77 -69 -19 0 -23 5 -23 33 1 17 9 50 20 72 11 22 19 47 20 56 0 8 6 27 12 41
l13 27 15 -25 c8 -13 18 -24 23 -24z m-601 -20 c9 0 21 -7 28 -15 7 -8 19 -15
26 -15 8 0 33 -12 57 -27 23 -15 50 -26 60 -24 10 1 17 -4 17 -15 0 -10 6 -25
14 -33 8 -9 21 -36 29 -61 19 -55 45 -108 58 -115 5 -4 9 -13 9 -22 0 -9 -36
21 -80 68 -44 45 -80 89 -80 96 0 7 -4 13 -10 13 -13 0 -170 161 -170 174 0 6
7 3 14 -6 7 -10 20 -18 28 -18z m1128 -100 c-7 -13 -7 -20 0 -20 14 0 13 -97
-2 -106 -6 -4 -14 -2 -16 4 -2 7 -8 10 -13 7 -5 -4 -6 0 -3 8 3 8 1 18 -5 22
-6 3 -11 13 -11 21 0 8 -14 33 -30 56 l-31 42 23 18 c13 10 39 28 58 41 l35
23 3 -48 c2 -26 -2 -57 -8 -68z m550 110 c0 -3 15 -11 34 -18 18 -7 43 -21 55
-31 18 -16 19 -20 5 -25 -8 -3 -24 -6 -35 -6 -11 0 -27 -4 -37 -9 -33 -17
-132 -44 -138 -38 -11 10 7 29 23 23 11 -4 13 -1 8 15 -5 15 1 28 24 48 17 15
31 32 31 38 0 5 7 10 15 10 8 0 15 -3 15 -7z m-941 -122 c29 -31 31 -58 5 -58
-8 0 -14 6 -15 13 0 6 -5 -1 -11 -16 -9 -24 -14 -28 -37 -23 -19 5 -22 4 -11
-3 26 -17 -3 -35 -44 -27 -20 4 -36 10 -35 14 2 20 38 68 57 77 12 5 22 15 22
20 0 13 20 35 31 35 5 0 21 -14 38 -32z m241 -4 c0 -8 5 -14 10 -14 6 0 10
-13 10 -30 0 -20 5 -30 15 -30 8 0 16 -9 17 -20 0 -11 1 -25 2 -32 1 -7 -14
-15 -32 -19 -28 -6 -37 -2 -72 33 -23 23 -37 45 -33 52 4 6 8 16 8 21 0 17 19
41 40 53 22 12 35 7 35 -14z m-652 -89 l2 -50 -20 44 c-25 53 -25 63 -2 59 13
-2 18 -15 20 -53z m1380 43 c-3 -7 -23 -21 -45 -33 -23 -11 -50 -28 -60 -38
-11 -9 -22 -15 -25 -12 -2 3 -17 -9 -33 -25 -16 -17 -37 -30 -46 -30 -10 0
-26 -8 -36 -18 -40 -39 -62 -54 -72 -47 -15 9 9 53 52 96 19 19 36 43 38 54 3
14 19 21 63 30 33 7 67 10 75 8 9 -2 25 3 36 11 24 18 58 21 53 4z m-886 -48
c5 0 24 -16 42 -35 39 -41 32 -53 -33 -62 -38 -5 -120 21 -121 39 0 8 48 42
73 51 9 4 17 12 18 19 0 10 2 10 6 1 2 -7 9 -13 15 -13z m549 -48 c-20 -20
-46 -53 -57 -72 -10 -19 -25 -41 -31 -48 -11 -11 -13 -10 -13 7 0 11 5 23 10
26 6 3 10 18 10 33 0 35 26 72 50 72 10 0 22 5 25 10 3 6 15 10 25 10 15 0 11
-8 -19 -38z m-899 -10 c-14 -22 -17 -23 -20 -8 -5 27 6 46 22 40 13 -5 13 -9
-2 -32z m763 -27 c0 -10 -6 -20 -12 -22 -8 -3 -13 5 -13 22 0 17 5 25 13 23 6
-3 12 -13 12 -23z m-81 -16 c-9 -16 -20 -10 -21 12 -2 17 1 18 12 9 8 -7 12
-16 9 -21z m-609 11 c-3 -5 -14 -10 -23 -10 -15 0 -15 2 -2 10 20 13 33 13 25
0z m525 -24 c0 -7 9 -25 21 -40 36 -45 16 -49 -30 -5 -33 32 -40 44 -29 50 20
13 38 11 38 -5z m-375 -6 c7 -12 -101 -44 -123 -35 -14 5 -14 7 -2 15 8 6 30
10 48 10 17 0 32 5 32 10 0 13 37 13 45 0z m306 -54 c15 -17 26 -32 25 -34 -2
-1 -36 13 -77 32 -73 34 -73 34 -39 38 47 5 58 0 91 -36z m-171 -4 c0 -4 -6
-14 -12 -21 -11 -11 -7 -12 18 -7 23 5 44 0 85 -21 30 -15 56 -30 59 -33 3 -4
21 -11 40 -17 52 -16 11 -15 -104 2 -55 8 -118 15 -142 15 -23 0 -66 5 -96 11
-29 6 -64 13 -78 16 -20 4 -13 9 40 25 36 11 72 24 80 29 19 10 110 11 110 1z
m550 4 c0 -2 -7 -6 -15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2 15
-4z"
          />
          <path
            d="M1076 2161 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4
-12 2 -15 -3z"
          />
          <path
            d="M1381 2043 c-1 -6 -9 -13 -18 -15 -11 -2 -14 -6 -8 -10 16 -10 38 7
32 23 -3 9 -6 9 -6 2z"
          />
          <path
            d="M1080 1945 c0 -14 38 -46 44 -37 3 6 -1 18 -10 26 -15 16 -34 21 -34
11z"
          />
          <path
            d="M1512 1888 c5 -15 28 -23 28 -10 0 5 -7 13 -16 16 -10 4 -14 1 -12
-6z"
          />
          <path
            d="M1565 1860 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"
          />
          <path d="M1645 1839 c-10 -15 3 -25 16 -12 7 7 7 13 1 17 -6 3 -14 1 -17 -5z" />
          <path d="M2080 1614 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z" />
          <path d="M1926 1505 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z" />
          <path d="M1778 1503 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
          <path d="M798 1368 c9 -9 15 -9 24 0 9 9 7 12 -12 12 -19 0 -21 -3 -12 -12z" />
          <path
            d="M1055 1450 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6
0 -7 -4 -4 -10z"
          />
          <path
            d="M1300 1415 c0 -14 -6 -16 -30 -11 -17 3 -30 1 -30 -4 0 -6 7 -10 15
-10 8 0 15 -4 15 -10 0 -5 11 -10 24 -10 20 0 24 4 21 25 -3 30 -15 46 -15 20z"
          />
          <path d="M1358 1313 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
          <path
            d="M1336 1225 c-3 -9 0 -15 8 -15 8 0 16 7 20 15 3 9 0 15 -8 15 -8 0
-16 -7 -20 -15z"
          />
          <path
            d="M404 1379 c-8 -14 31 -53 45 -45 16 10 13 19 -14 39 -16 12 -26 14
-31 6z"
          />
          <path d="M1836 1301 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z" />
          <path d="M1706 1271 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z" />
          <path
            d="M2050 1290 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"
          />
          <path d="M367 1191 c3 -12 10 -21 15 -21 13 0 6 32 -9 37 -7 3 -9 -3 -6 -16z" />
          <path
            d="M726 1052 c-3 -5 -2 -19 1 -31 4 -17 8 -19 14 -9 12 18 11 48 0 48
-6 0 -12 -4 -15 -8z"
          />
          <path
            d="M860 1020 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
          />
          <path
            d="M1940 1096 c0 -8 -5 -16 -11 -18 -6 -2 -9 -15 -6 -28 l4 -25 8 23 c4
12 11 22 16 22 5 0 9 9 9 20 0 11 -4 20 -10 20 -5 0 -10 -6 -10 -14z"
          />
          <path
            d="M1570 1026 c0 -10 9 -16 21 -16 24 0 21 23 -4 28 -10 2 -17 -3 -17
-12z"
          />
          <path
            d="M1730 1019 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"
          />
          <path d="M1737 984 c-4 -4 -7 -17 -7 -28 1 -19 1 -20 11 -3 11 19 8 43 -4 31z" />
          <path d="M1058 883 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z" />
          <path
            d="M1000 760 c0 -18 4 -29 10 -25 6 3 10 15 10 25 0 10 -4 22 -10 25 -6
4 -10 -7 -10 -25z"
          />
          <path
            d="M1343 763 c-18 -7 -16 -23 2 -23 8 0 15 7 15 15 0 8 -1 15 -2 14 -2
0 -9 -3 -15 -6z"
          />
          <path d="M765 609 c18 -5 33 -5 39 1 7 7 -4 10 -29 9 -40 -1 -40 -1 -10 -10z" />
          <path d="M637 594 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
          <path
            d="M1735 480 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"
          />
          <path
            d="M920 577 c0 -8 7 -17 15 -21 8 -3 15 -2 15 3 0 5 -7 14 -15 21 -12
10 -15 10 -15 -3z"
          />
          <path
            d="M565 400 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7
-4 -4 -10z"
          />
          <path
            d="M2030 590 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"
          />
          <path d="M1038 203 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
          <path
            d="M460 2281 c0 -12 5 -21 10 -21 6 0 10 6 10 14 0 8 -4 18 -10 21 -5 3
-10 -3 -10 -14z"
          />
          <path
            d="M20 1700 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
          />
          <path
            d="M100 685 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"
          />
          <path
            d="M320 460 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4
-4 -4 -10z"
          />
          <path
            d="M485 320 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"
          />
          <path d="M1988 233 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
          <path d="M1088 43 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
          <path
            d="M650 25 c0 -9 6 -12 15 -9 8 4 15 7 15 9 0 2 -7 5 -15 9 -9 3 -15 0
-15 -9z"
          />
        </g>
      </svg>
    </div>
  );
}
export default Loading;
