<template>
    <div>
      <div v-if="filteredData.length === 0" class="flex flex-col items-center justify-center rounded-2xl p-[15px] min-h-[250px] px-0 mt-4 bg-white border border-[#dee2e6]">
        <i class="mdi mdi-alert-circle-check" style="color: #dda129; font-size: 62px;"></i>
        <b class="text-center">Aucune donnée de consommation pour cette période</b>
      </div>
      <div v-else class="min-h-[250px] border border-solid border-[#dee2e6] flex items-center justify-center px-0 mt-4 bg-white rounded-[16px] p-[15px] overflow-hidden">
        <div class="h-full w-full">
          <div class="pt-3 pb-4 px-4 flex justify-end">
            <button @click="downloadPDF" class="btn-primary flex items-center py-2 mb-3 bg-[#fc0] text-black rounded-[30px] text-sm font-medium px-4 border-none">
              <span>Télécharger en PDF</span>
            </button>
          </div>
      
          <div>
            <div class="header-arr w-full flex justify-center border-b pb-2 text-[#212529] text-base font-normal bg-[#fc0] py-[10px] px-[15px]">
              Total des consommations: {{ totalConsumption }} MB
            </div>
            <table class="table-auto w-full text-[15px] border-collapse bill-details-table text-[#212529]">
              <thead>
                <tr class="bg-[#343a40] border border-[#454d55]">
                  <th class="px-4 py-[15px] text-left text-white">Services</th>
                  <th class="px-4 py-[15px] text-left text-white">Consommation</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(item, index) in filteredData" 
                  :key="index" 
                  :class="index % 2 === 0 ? 'bg-[#f2f2f2]' : ''"
                >
                  <td class="flex items-center p-3 gap-2">
                    <img :src="item.image" alt="" class="w-7 h-7 rounded-3xl">
                    <span>{{ item.service }}</span>
                  </td>
                  <td class="px-4">{{ item.consumption }} MB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted } from 'vue';
  import jsPDF from 'jspdf';
import 'jspdf-autotable';
  const props = defineProps({
    startDate: {
      type: Date,
      default: () => new Date()
    },
    endDate: {
      type: Date,
      default: () => new Date()
    }
  });
  
  const data = ref([
    { 
      service: 'Facebook', 
      consumption: 137.02, 
      image: '/public/Images/consommation/facebook.png', 
      date: new Date('2024-11-27') 
    },
    { 
      service: 'WhatsApp', 
      consumption: 70.72, 
      image: '/public/Images/consommation/whatsapp.png', 
      date: new Date('2023-10-02') 
    },
    { 
      service: 'Akamaihd', 
      consumption: 44.79, 
      image: '/public/Images/consommation/Akamaihd.png', 
      date: new Date('2023-10-03') 
    },
    { 
      service: 'AmazonS3', 
      consumption: 43.39, 
      image: '/public/Images/consommation/AmazonS3.png', 
      date: new Date('2023-10-04') 
    },
    { 
      service: 'SnapChat', 
      consumption: 31.37, 
      image: '/public/Images/consommation/snapchat.png', 
      date: new Date('2023-10-05') 
    },
    { 
      service: 'HTTPS', 
      consumption: 16.65, 
      image: '/public/Images/consommation/HTTPS.png', 
      date: new Date('2023-10-06') 
    },
    { 
      service: '38588', 
      consumption: 11.01, 
      image: '/public/Images/consommation/unknown.png', 
      date: new Date('2023-10-07') 
    },
    { 
      service: 'Crashlytics', 
      consumption: 10.33, 
      image: '/public/Images/consommation/crashlytics.png', 
      date: new Date('2023-10-08') 
    },
    { 
      service: '9823', 
      consumption: 9.37, 
      image: '/public/Images/consommation/unknown.png', 
      date: new Date('2023-10-09') 
    },
    { 
      service: 'AppleiCloud', 
      consumption: 7.22, 
      image: '/public/Images/consommation/AppleiCloud.png', 
      date: new Date('2023-10-10') 
    },
    { 
      service: 'GooglePhotos', 
      consumption: 6.39, 
      image: '/public/Images/consommation/GooglePhotos.png', 
      date: new Date('2023-10-11') 
    },
    { 
      service: 'UNKNOWN', 
      consumption: 6.27, 
      image: '/public/Images/consommation/unknown.png', 
      date: new Date('2023-10-12') 
    },
    { 
      service: 'YouTube', 
      consumption: 5.53, 
      image: '/public/Images/consommation/youtube.png', 
      date: new Date('2023-10-13') 
    },
    { 
      service: 'Unity3D', 
      consumption: 4.40, 
      image: '/public/Images/consommation/unity3d.png', 
      date: new Date('2023-10-14') 
    },
    { 
      service: 'ITunes', 
      consumption: 3.36, 
      image: '/public/Images/consommation/itunes.png', 
      date: new Date('2023-10-15') 
    },
    { 
      service: 'GoogleSearch', 
      consumption: 2.96, 
      image: '/public/Images/consommation/GoogleSearch.png', 
      date: new Date('2023-10-16') 
    },
    { 
      service: 'Google_Common', 
      consumption: 2.77, 
      image: '/public/Images/consommation/google_common.png', 
      date: new Date('2023-10-17') 
    },
    { 
      service: 'Slack', 
      consumption: 2.69, 
      image: '/public/Images/consommation/slack.png', 
      date: new Date('2023-10-18') 
    },
    { 
      service: 'WebMail_Gmail', 
      consumption: 2.05, 
      image: '/public/Images/consommation/webmail_gmail.png', 
      date: new Date('2023-10-19') 
    },
    { 
      service: 'Apple_', 
      consumption: 2.00, 
      image: '/public/Images/consommation/apple_service.png', 
      date: new Date('2023-10-20') 
    },
    { 
      service: 'SSL', 
      consumption: 1.92, 
      image: '/public/Images/consommation/ssl.png', 
      date: new Date('2023-10-21') 
    },
    { 
      service: 'IOS_PushMessage', 
      consumption: 1.91, 
      image: '/public/Images/consommation/IOS_PushMessage.png', 
      date: new Date('2023-10-22') 
    },
    { 
      service: 'Apple_Siri', 
      consumption: 0.49, 
      image: '/public/Images/consommation/Apple_Siri.png', 
      date: new Date('2023-10-23') 
    },
    { 
      service: 'AppleGameCenter', 
      consumption: 0.31, 
      image: '/public/Images/consommation/AppleGameCenter.png', 
      date: new Date('2023-10-24') 
    },
    { 
      service: 'Facebook_Messenger', 
      consumption: 0.29, 
      image: '/public/Images/consommation/facebook_messenger.png', 
      date: new Date('2023-10-25') 
    },
    { 
      service: 'Spotify', 
      consumption: 0.25, 
      image: '/public/Images/consommation/spotify.png', 
      date: new Date('2023-10-26') 
    },
]);

  
  const filteredData = ref([]);
  
  const totalConsumption = computed(() => {
    return filteredData.value.reduce((acc, item) => acc + item.consumption, 0).toFixed(2);
  });
  
  const selectedStartDate = ref(null);
const selectedEndDate = ref(null);

const filterData = () => {
  // Utilisez les dates sélectionnées comme nouvelle référence
  props.startDate = selectedStartDate.value;
  props.endDate = selectedEndDate.value;

  if (!props.startDate || !props.endDate) {
    filteredData.value = data.value;
    return;
  }

  const filtered = data.value.filter(item => {
    const itemDate = new Date(item.date.setHours(0, 0, 0, 0));
    const startDate = new Date(props.startDate.setHours(0, 0, 0, 0));
    const endDate = new Date(props.endDate.setHours(0, 0, 0, 0));

    return itemDate >= startDate && itemDate <= endDate;
  });

  filteredData.value = filtered;
};
  // Observe les changements des props de date
  watch([() => props.startDate, () => props.endDate], () => {
    filterData();
  });
  
  // Filtrage initial au montage
  onMounted(() => {
    filterData();
  });
  const convertImageToBase64 = (imagePath) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Nécessaire si l'image est externe
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/png")); // Conversion en Base64
    };
    img.onerror = (error) => reject(error);
    img.src = imagePath;
  });
};

const downloadPDF = async () => {
  const doc = new jsPDF();

  // Titre du document
  doc.setFontSize(18);
  doc.text('Détails de Consommation', 14, 22);

  // Sous-titre avec la période
  doc.setFontSize(10);
  const startDateStr = props.startDate ? props.startDate.toLocaleDateString() : 'Non spécifié';
  const endDateStr = props.endDate ? props.endDate.toLocaleDateString() : 'Non spécifié';
  doc.text(`Période: ${startDateStr} - ${endDateStr}`, 14, 30);

  // Préparer les données du tableau
  const tableRows = [];
  for (const item of filteredData.value) {
    try {
      const base64Image = await convertImageToBase64(item.image);
      tableRows.push([
        { content: item.service, image: base64Image }, // Ajouter l'image et le texte
        `${item.consumption.toFixed(2)} MB`,
      ]);
    } catch (error) {
      console.error("Erreur de conversion de l'image:", error);
    }
  }

  // Ajouter la table
  doc.autoTable({
    head: [["Service", "Consommation (MB)"]],
    body: tableRows,
    startY: 40,
    theme: 'striped',
    styles: { fontSize: 9, cellPadding: 3 },
    headStyles: { fillColor: [52, 58, 64], textColor: 255 },
    columnStyles: {
      0: {
        cellWidth: 80,
        renderer: (doc, data) => {
          const rowData = data.cell.raw;
          if (rowData.image) {
            // Ajouter l'image et le texte
            doc.addImage(rowData.image, 'PNG', data.cell.x + 2, data.cell.y + 2, 10, 10);
            doc.text(rowData.content, data.cell.x + 14, data.cell.y + 8);
          } else {
            doc.text(rowData.content || "", data.cell.x + 2, data.cell.y + 8);
          }
        },
      },
    },
  });

  // Ajouter le total en bas
  doc.setFontSize(10);
  doc.text(`Total des consommations: ${totalConsumption.value} MB`, 14, doc.autoTable.previous.finalY + 10);

  // Sauvegarder le PDF
  doc.save("consommation_internet.pdf");
};


  </script>
  
  <style scoped>
  .bill-details-table {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  </style>