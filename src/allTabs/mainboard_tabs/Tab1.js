import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Tab1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef(null);

  const screenWidth = Dimensions.get("window").width;

  const carouselData = [
    { id: "01", title: "Image 1", image: require("@/assets/adImages/add-1.jpeg") },
    { id: "02", title: "Image 2", image: require("@/assets/adImages/add-2.png") },
    { id: "03", title: "Image 3", image: require("@/assets/adImages/add-3.png") },
    { id: "04", title: "Image 4", image: require("@/assets/adImages/add-4.png") },
    { id: "05", title: "Image 5", image: require("@/assets/adImages/add-5.jpeg") },
  ];

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatlistRef.current) {
        const nextIndex = (activeIndex + 1) % carouselData.length;
        flatlistRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        setActiveIndex(nextIndex);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
      {/* Carousel */}
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false} 
      />

      {/* Scrollable IPO Cards */}
      
      
        <View style={styles.ipoCard}>
          <View style={styles.ipoHeader}>
            <Image
              source={require("@/assets/cardImages/card-1.jpeg")}
              style={styles.logo}
            />
            <Text style={styles.ipoTitle}>Indo Farm Equipment</Text>
            <TouchableOpacity>
              <Text style={styles.shareText}>Share</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.ipoDate}>Offer Date: Dec 31 - Jan 02, 2025</Text>
          <View style={styles.ipoDetails}>
            <Text style={styles.detailText}>₹ Offer Price: 204-215</Text>
            <Text style={styles.detailText}>Lot Size: 69</Text>
            <Text style={styles.detailText}>Subs: 40.18 times</Text>
          </View>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ipoCard}>
          <View style={styles.ipoHeader}>
            <Image
              source={require("@/assets/cardImages/card-6.png")}
              style={styles.logo}
            />
            <Text style={styles.ipoTitle}>Quantum Future Tek</Text>
            <TouchableOpacity>
              <Text style={styles.shareText}>Share</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.ipoDate}>Offer Date: Jan 07 - Jan 15, 2025</Text>
          <View style={styles.ipoDetails}>
            <Text style={styles.detailText}>₹ Offer Price: 245-290</Text>
            <Text style={styles.detailText}>Lot Size: 80</Text>
            <Text style={styles.detailText}>Subs: 12.32 times</Text>
          </View>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ipoCard}>
        <View style={styles.ipoHeader}>
          <Image
            source={require("@/assets/cardImages/card-5.png")}
            style={styles.logo}
          />
          <Text style={styles.ipoTitle}>Capital Infra Trust InvIt</Text>
          <TouchableOpacity>
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ipoDate}>Offer Date: Jan 07 - Jan 09, 2025</Text>
        <View style={styles.ipoDetails}>
          <Text style={styles.detailText}>₹ Offer Price: 99-100</Text>
          <Text style={styles.detailText}>Lot Size: 150</Text>
          <Text style={styles.detailText}>Subs: 0.19 times</Text>
        </View>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  imageContainer: {},
  image: {
    marginTop: 10,
    marginBottom: 1,
    height: 210,
    width: Dimensions.get("window").width - 20,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  scrollViewContent: {
    paddingBottom: 110,
  },
  ipoCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 14,
    elevation: 2,
    marginTop: 10,
  },
  ipoHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 100,
  },
  logo: {
    width: 50,
    height: 50,
  },
  ipoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  shareText: {
    color: "#6c63ff",
    fontSize: 12,
  },
  ipoDate: {
    marginTop: 8,
    fontSize: 12,
    color: "#666",
  },
  ipoDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  detailText: {
    fontSize: 12,
    color: "#000",
  },
  applyButton: {
    backgroundColor: "#6c63ff",
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 8,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Tab1;
