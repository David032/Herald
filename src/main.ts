import * as ds from "@devicescript/core"
import {Namebadge} from './namebadge'
import { PimoroniBadger2040W } from "@devicescript/drivers"
import { Image } from "@devicescript/graphics";


const badger = new PimoroniBadger2040W
const badge = new Namebadge();
badge.DisplayName = "John Smith"
badge.Title = "Badger Wrangler"
badge.Email = "john.smith@email.com"
badge.ContactNumber = "0000000000"

await badge.Draw(badger)