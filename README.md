helper scripts to download [elixirsips.com](http://elixirsips.com/) videos.

```
npm i -g elixirsips-downloader
```

# Setup

1) Purchase a subscription for a month on [elixirsips.com](http://elixirsips.com/)

2) get your login token with (substitute USERNAME and PASSWORD..)

```
curl --data "username=USERNAME&password=PASSWORD&redirect=" https://elixirsips.dpdcart.com/subscriber/login -X POST -i --silent | grep "Set-Cookie: symfony" | awk '{print $2}'
```

Should output something like

```
symfony=abcdefm7lfvgit9mb912illd66;
```

**Copy it without the semicolon!**

3) Set the environmental variable "ELIXIRSIPS_COOKIE" to the value copied before


# download!

```
elixirsips-downloader $FROM $TO

# where $FROM and $TO is the range of episodes to download
```
