import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";
import { styles } from "./styles";
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { GuildProps } from "../Guild";
import { LinearGradient } from "expo-linear-gradient";

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient style={styles.guildIconContainer} colors={[secondary50,secondary70]}>
          <GuildIcon />
        </LinearGradient>
        

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}> {data.guild.name} </Text>

            <Text style={styles.category}> {category.title}</Text>
          </View>{/* header */}

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}> {data.date} </Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? on : primary } />

              <Text style={[styles.player, { color: owner ? on : primary }]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>{/* playersInfo */}
          </View>{/* footer */}
        </View>{/* content */}
      </View>{/* container */}
    </RectButton>
  )
}