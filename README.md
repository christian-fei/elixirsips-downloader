helper scripts to download [elixirsips.com](http://elixirsips.com/) videos.

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



# get episodes

```
parse_episodes > episodes.txt
```


# get single episode attachments

Simply replace `1,1` of the `sed` command to the *range* of episodes you want to download.

```
sed -n 1,1p episodes.txt | parse_attachments | get_attachments
```

To download the episodes 1 to 10 you would execute:

```
sed -n 1,10p episodes.txt | parse_attachments | get_attachments
```
