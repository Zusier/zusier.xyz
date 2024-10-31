+++
title = "Backup Your Shit!"
date = "2022-04-16T22:41:08Z"
author = ""
authorTwitter = "" #do not include @
cover = ""
tags = ["backup", "datahoarding"]
keywords = ["", ""]
description = "A post reminding you to backup your stuff. Due to recent events."
showFullContent = false
readingTime = false
+++

## What Happened?
Long story short. A really bad misconfiguration.

I recently migrated all of my drives to [ZFS](https://wiki.archlinux.org/title/ZFS) due to it's mirroring, compression and native encryption. Once I set it all up, I rebooted and had some problems problems with the DKMS package for ZFS failing to load... after fixing (had to rebuild kernel) that my ZFS pool wasn't appearing.

So I tried some things like `zpool import -a`, no luck.. `zpool import main`? Nope. Eventually I ran `zpool destroy main`??? (so yeah, dont delete your data and you wont have problems XD). Anyways, at that point I had no other backups, and ended up losing all my data.

## What are you doing now?

I've setup [Borg Backup](https://www.borgbackup.org/) with the repo located on a separate drive and not in the ZFS pool. This is all I have for now until I setup an offsite solution aswell.

## Backup Software and Resources

So you don't make the same mistake. I advise you to backup any important documents and files you have in atleast one extra place.

### Backup Software
- [Borg Backup](https://www.borgbackup.org/) - Archival backup with deduplication, compression and incremental!
- [Duplicity](http://duplicity.nongnu.org/) - rsync based incremental/versioned backups
- [bup](https://bup.github.io/) - Git [Packfile](https://git-scm.com/book/en/v2/Git-Internals-Packfiles) based backups, with deduplication and versioning

### Offsite Storage Providers
- [Borg Base](https://www.borgbase.com/) - Offsite Borg repo backup
- [Storj](https://www.storj.io/) - Cheap, Distributed storage
- [Backblaze](https://www.backblaze.com/cloud-backup.html) - Unlimited Backup for $6/Month
- [B2](https://www.backblaze.com/b2/cloud-storage.html) - Backblaze pay as you go
